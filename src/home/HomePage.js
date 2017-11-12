import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin, userCreate } from '../actions/userActions';
import PropTypes from 'prop-types';
import RegisterForm from '../common/components/RegisterForm';

class HomePage extends Component {
  handleLogin = ({ email, password }) => {
    this.props.userLogin({ email, password });
  };

  handleRegister = ({ email, password }) => {
    this.props.userCreate({ email, password });
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <RegisterForm onRegister={this.handleRegister} />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  userLogin: ({ email, password }) => dispatch(userLogin({ email, password })),
  userCreate: ({ email, password }) => dispatch(userCreate({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
