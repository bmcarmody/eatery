import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../../redux/actions/authActions';

class AuthLinks extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <React.Fragment>
        <NavLink
          className="navbar__link navbar__link--first"
          activeClassName="navbar--selected"
          exact
          to="/myrecipes"
        >
          My Recipes
        </NavLink>
        <a
          href="#navbar"
          onClick={this.onLogoutClick.bind(this)}
          className="navbar__link navbar__link--last"
        >
          Logout
        </a>
      </React.Fragment>
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
)(AuthLinks);
