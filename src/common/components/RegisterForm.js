import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class RegisterForm extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRegisterClick = () => {
    const { email, password } = this.state;
    this.props.onRegister({ email, password });
  }

  render(){
    return (
    <form onSubmit={ this.handleSubmit }>
      <TextField
        name="email"
        value={this.state.email}
        onChange={this.handleChange}
        hintText="Enter email"
        floatingLabelText="Email"
      />
      <TextField
        name="password"
        value={this.state.password}
        onChange={this.handleChange}
        hintText="Enter password"
        floatingLabelText="Password"
        type="password"
      />
      <RaisedButton label="Register" primary={true} onClick={ this.handleRegisterClick }/>
    </form>
  )
  }
}

export default RegisterForm;