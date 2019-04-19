import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clearRecipe } from '../../redux/actions/recipeActions';

import Searchbar from '../molecules/Searchbar';
import LoadingAnimation from '../atoms/LoadingAnimation';
import RecipeSidebar from '../organisms/RecipeSidebar';
import RecipeDetails from '../molecules/RecipeDetails';

class RecipeResults extends Component {
  constructor() {
    super();
    this.state = {
      width: 0,
    };
    this.resultsPage = '';
  }

  updateWindowWidth() {
    const width = window.innerWidth;
    this.setState({ width });
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth.bind(this));
  }

  componentDidUpdate() {
    this.resultsPage = document.querySelector('.recipeResults__grid--results');
    if (this.resultsPage) {
      if (Object.keys(this.props.recipe).length > 0) {
        this.resultsPage.style.gridTemplateAreas = 'details';
      } else {
        this.resultsPage.style.gridTemplateAreas = 'recipes';
      }
    }
  }

  showDetails() {
    this.resultsPage.style.gridTemplateAreas = 'details';
  }

  hideDetails() {
    this.props.clearRecipe();
    try {
      const recipeSelector = document.querySelector('.recipe__active');
      recipeSelector.classList.remove('recipe__active');
    } catch (e) {}

    this.resultsPage.style.gridTemplateAreas = 'recipes';
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
                  <div className="recipeResults__grid--results recipeResults__selector">
                    <RecipeSidebar showDetails={this.showDetails.bind(this)} />
                    <RecipeDetails hideDetails={this.hideDetails.bind(this)} />
                  </div>
                ) : (
                  <div className="recipeResults__grid--center">
                    <div className="center-item no__results__found">
                      <h1 className="font__cursive">No recipes found</h1>
                      <p>Please try another search</p>
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
  recipe: state.recipes.recipe,
  recipes: state.recipes.recipes,
  isFetchingRecipes: state.recipes.isFetchingRecipes,
});

export default connect(
  mapStateToProps,
  { clearRecipe }
)(RecipeResults);
