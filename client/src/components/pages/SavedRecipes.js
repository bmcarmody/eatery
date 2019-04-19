import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingAnimation from '../atoms/LoadingAnimation';
import RecipeSidebar from '../organisms/RecipeSidebar';
import RecipeDetails from '../molecules/RecipeDetails';

import { fetchRecipes, clearRecipe } from '../../redux/actions/recipeActions';

class SavedRecipes extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
    this.props.fetchRecipes();
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth.bind(this));
  }

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

  componentDidUpdate() {
    this.resultsPage = document.querySelector('.savedRecipes__grid--results');
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
        <div className="savedRecipes">
          <div className="savedRecipes__background-image" />
          <div className="savedRecipes__container">
            {this.props.isFetchingRecipes ? (
              <div className="savedRecipes__grid--center">
                <div className="center-item">
                  <LoadingAnimation />
                </div>
              </div>
            ) : (
              <React.Fragment>
                {this.props.recipes[0] ? (
                  <div className="savedRecipes__grid--results">
                    <RecipeSidebar
                      page="savedRecipes"
                      showDetails={this.showDetails.bind(this)}
                    />
                    <RecipeDetails hideDetails={this.hideDetails.bind(this)} />
                  </div>
                ) : (
                  <div className="savedRecipes__grid--center">
                    <div className="center-item no__results__found">
                      <h1 className="font__cursive">
                        You haven't saved any recipes!
                      </h1>
                      <p>
                        Search for your favorite recipes and click the heart
                        icon
                      </p>
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
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { fetchRecipes, clearRecipe }
)(SavedRecipes);
