import axios from 'axios';
import React, { Component } from 'react';
import Form from '../Form';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post('/api/users/register', userData)
      .then(console.log('Users registered in!'));
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
        <Form
          register="true"
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </main>
    );
  }
}

export default Register;
