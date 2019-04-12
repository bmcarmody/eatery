import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainLink from '../atoms/NavbarLinks/MainLink';
import AuthLinks from '../atoms/NavbarLinks/AuthLinks';
import GuestLinks from '../atoms/NavbarLinks/GuestLinks';

class Navbar extends Component {
  closeMenu() {
    document.querySelector('.navbar__menu--toggle').checked = false;
  }

  render() {
    return (
      <div className="background--white">
        <nav className="navbar">
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
  null,
  null,
  { pure: false } // Fixes issue with activeClassName not working on NavLinks
)(Navbar);
