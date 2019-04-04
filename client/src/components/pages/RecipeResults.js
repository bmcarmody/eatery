import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../Search';
import LoadingAnimation from '../LoadingAnimation';
import RecipeSidebar from '../RecipeSidebar';
import RecipeDetails from '../RecipeDetails';

class RecipeResults extends Component {
  constructor() {
    super();
    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(e) {
    document.querySelector('.recipe__container').scrollTop = e.target - 10;
  }

  render() {
    return (
      <React.Fragment>
        <div className="recipe__searchbar">
          <div className="recipe__searchbar__container">
            <Search />
          </div>
        </div>
        <div className="recipe">
          <div className="recipe__background-image" />
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

export default connect(mapStateToProps)(RecipeResults);
