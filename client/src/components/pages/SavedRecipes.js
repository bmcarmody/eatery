import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingAnimation from '../atoms/LoadingAnimation';
import RecipeSidebar from '../organisms/RecipeSidebar';
import RecipeDetails from '../molecules/RecipeDetails';

import { fetchRecipes } from '../../actions/recipeActions';

class SavedRecipes extends Component {
  constructor() {
    super();
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  onScroll(e) {
    document.querySelector('.recipe__container').scrollTop = e.target - 10;
  }

  render() {
    return (
      <React.Fragment>
        <div className="recipe">
          <div className="saved-recipes__background-image" />
          <div className="recipe__container">
            {this.props.isFetchingRecipes ? (
              <div className="center-item">
                <LoadingAnimation />
              </div>
            ) : (
              <React.Fragment>
                {this.props.recipes[0] ? (
                  <React.Fragment>
                    <RecipeSidebar onScroll={this.onScroll} />
                    <RecipeDetails />
                  </React.Fragment>
                ) : (
                  <div className="center-item no__results__found">
                    <h1>No recipes found</h1>
                    <p className="font__kepler">Please try another search</p>
                  </div>
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes,
  isFetchingRecipes: state.recipes.isFetchingRecipes,
});

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(SavedRecipes);
