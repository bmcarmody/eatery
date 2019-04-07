import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainLink from '../atoms/NavbarLinks/MainLink';
import AuthLinks from '../atoms/NavbarLinks/AuthLinks';
import GuestLinks from '../atoms/NavbarLinks/GuestLinks';

class Navbar extends Component {
  render() {
    return (
      <div className="background--white">
        <nav className="navbar">
          <MainLink />
          {this.props.auth.isAuthenticated ? <AuthLinks /> : <GuestLinks />}
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
