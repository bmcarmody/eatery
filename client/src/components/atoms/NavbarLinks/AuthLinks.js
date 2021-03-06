import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../../redux/actions/authActions';
import {
  clearRecipes,
  fetchRecipes,
} from '../../../redux/actions/recipeActions';

class AuthLinks extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    if (this.props.closeMenu) {
      this.props.closeMenu();
    }
    this.props.history.push('/');
    this.props.logoutUser();
  }

  onSavedRecipesClick() {
    this.props.clearRecipes();

    if (this.props.closeMenu) {
      this.props.closeMenu();
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavLink
          onClick={this.onSavedRecipesClick.bind(this)}
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
  recipes: state.recipes,
});

export default connect(
  mapStateToProps,
  { logoutUser, clearRecipes, fetchRecipes },
  null,
  { pure: false } // Fixes issue with activeClassName not working on NavLinks
)(withRouter(AuthLinks));
