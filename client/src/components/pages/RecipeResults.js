import React, { Component } from 'react';
import { connect } from 'react-redux';

import Searchbar from '../molecules/Searchbar';
import LoadingAnimation from '../atoms/LoadingAnimation';
import RecipeSidebar from '../organisms/RecipeSidebar';
import RecipeDetails from '../molecules/RecipeDetails';

class RecipeResults extends Component {
  onScrollSidebar(e) {
    console.log(e);
    document.querySelector('recipeResults').scrollTop = e.target - 10;
  }

  onScrollDetails(e) {
    document.querySelector('.recipeResults__grid--results').scrollTop =
      e.target - 10;
  }

  render() {
    return (
      <React.Fragment>
        <div className="recipeResults__searchbar">
          <div className="recipeResults__searchbar__container">
            <Searchbar />
          </div>
        </div>
        <div className="recipeResults">
          <div className="recipeResults__background-image" />
          <div className="recipeResults__container">
            {this.props.isFetchingRecipes ? (
              <div className="recipeResults__grid--center">
                <div className="center-item">
                  <LoadingAnimation />
                </div>
              </div>
            ) : (
              <React.Fragment>
                {this.props.recipes[0] ? (
                  <div className="recipeResults__grid--results">
                    <RecipeSidebar onScroll={this.onScrollSidebar.bind(this)} />
                    <RecipeDetails onScroll={this.onScrollDetails.bind(this)} />
                  </div>
                ) : (
                  <div className="recipeResults__grid--center">
                    <div className="center-item no__results__found">
                      <h1>No recipes found</h1>
                      <p className="font__kepler">Please try another search</p>
                    </div>
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

export default connect(mapStateToProps)(RecipeResults);
