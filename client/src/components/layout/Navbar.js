import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

export class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <React.Fragment>
        <a
          href="#nav"
          onClick={this.onLogoutClick.bind(this)}
          className="nav__link nav__link--logout"
        >
          Logout
        </a>
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment>
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
      </React.Fragment>
    );

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
          {isAuthenticated ? authLinks : guestLinks}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser },
  null,
  { pure: false } // Fixes issue with activeClassName not working on NavLinks
)(Navbar);
