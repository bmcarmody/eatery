import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';

export class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <nav className="nav">
        <NavLink
          className="nav__link nav__title"
          activeClassName="nav--selected"
          exact
          to="/"
        >
          Eatery
        </NavLink>
        <a
          href="#nav"
          onClick={this.onLogoutClick.bind(this)}
          className="nav__link nav--register"
        >
          Logout
        </a>
      </nav>
    );

    const guestLinks = (
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
    );

    return (
      <div className="background--white">
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
