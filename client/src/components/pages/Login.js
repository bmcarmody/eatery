import axios from 'axios';
import React, { Component } from 'react';
import Form from '../Form';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post('/api/users/login', userData)
      .then(console.log('Users logged in!'));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <main>
        <div className="login__image" />
        <Form onSubmit={this.onSubmit} onChange={this.onChange} />
      </main>
    );
  }
}

export default Login;
