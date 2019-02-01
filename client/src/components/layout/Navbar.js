import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className="background--white">
        <nav className="nav">
          <Link className="nav__link nav__title" to="/">
            Eatery
          </Link>
          <Link className="nav__link nav__link--login" to="/login">
            Login
          </Link>
          <Link className="nav__link nav__link--register" to="/register">
            Signup
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
