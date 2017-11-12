import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../common/components/LoginForm';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <LoginForm />
      </div>
    );
  }
}

export default HomePage;
