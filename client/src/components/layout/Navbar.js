import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className="background--white">
        <nav className="nav">
          <NavLink
            className="nav__link nav__title"
            activeClassName="nav--selected"
            exact
            to="/"
          >
            Eatery
          </NavLink>
          <NavLink
            className="nav__link nav__link--login"
            activeClassName="nav--selected"
            exact
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="nav__link nav__link--register"
            activeClassName="nav--selected"
            exact
            to="/register"
          >
            Register
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navbar;
