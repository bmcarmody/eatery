import React, { Component } from 'react';
import Form from '../Form';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';

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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
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

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
