import React, { Component } from 'react';
import { connect } from 'react-redux';

import jwt_decode from 'jwt-decode';
import { logoutUser } from '../../redux/actions/authActions';

import MainLink from '../atoms/NavbarLinks/MainLink';
import AuthLinks from '../atoms/NavbarLinks/AuthLinks';
import GuestLinks from '../atoms/NavbarLinks/GuestLinks';

class Navbar extends Component {
  closeMenu() {
    document.querySelector('.navbar__menu--toggle').checked = false;
  }

  componentDidUpdate() {
    if (localStorage.jwtToken) {
      // Decode toekn and get user info and exp
      const decoded = jwt_decode(localStorage.jwtToken);

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Logout user
        this.props.logoutUser();
        this.props.history.push('/');
      }
    }
  }

  render() {
    return (
      <div className="background--white">
        <nav className="navbar font__cursive">
          <MainLink />
          <div className="navbar__extended">
            {this.props.auth.isAuthenticated ? <AuthLinks /> : <GuestLinks />}
          </div>
          <div className="navbar__menu">
            <input
              type="checkbox"
              id="navbar__menu--toggle"
              className="navbar__menu--toggle"
            />
            <label htmlFor="navbar__menu--toggle">
              <div className="navbar__menu__icon--wrapper" />
              <div className="navbar__menu__icon" />
            </label>

            <div className="navbar__menu__container">
              {this.props.auth.isAuthenticated ? (
                <AuthLinks closeMenu={this.closeMenu.bind(this)} />
              ) : (
                <GuestLinks closeMenu={this.closeMenu.bind(this)} />
              )}
            </div>
          </div>
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
