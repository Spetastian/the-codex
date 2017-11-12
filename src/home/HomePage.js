import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions/userActions';
import PropTypes from 'prop-types';
import LoginForm from '../common/components/LoginForm';

class HomePage extends Component {
  handleLogin = ({ email, password }) => {
    this.props.userLogin({ email, password });
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <LoginForm onLogin={this.handleLogin} />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  userLogin: ({ email, password }) => dispatch(userLogin({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
