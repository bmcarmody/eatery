import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingAnimation from '../atoms/LoadingAnimation';

import {
  saveRecipe,
  isRecipeSaved,
  removeRecipe,
} from '../../redux/actions/recipeActions';

class RecipeDetails extends Component {
  constructor() {
    super();
    this.saveRecipe = this.saveRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.showLoginError = this.showLoginError.bind(this);
  }

  isRecipeSaved() {
    if (this.props.recipe.recipe_id) {
      this.props.isRecipeSaved(this.props.recipe.recipe_id);
    }
  }

  saveRecipe() {
    const recipeData = {
      recipe_id: this.props.recipe.recipe_id,
      title: this.props.recipe.title,
      publisher: this.props.recipe.publisher,
      image_url: this.props.recipe.image_url,
    };

    this.props.saveRecipe(recipeData);
  }

  deleteRecipe() {
    this.props.removeRecipe(this.props.recipe.recipe_id);
  }

  showLoginError() {
    alert('You must be logged in to save recipes!');
  }

  render() {
    return (
      <div className="recipeDetails" onScroll={this.props.onScroll}>
        {this.props.isFetchingRecipe ? (
          <div className="recipeDetails__loading__animation">
            <LoadingAnimation />
          </div>
        ) : (
          <React.Fragment>
            {this.isRecipeSaved()}
            {this.props.recipe.title && (
              <div className="recipeDetails__container">
                <figure className="img__container">
                  <img
                    src={this.props.recipe.image_url}
                    alt={this.props.recipe.title}
                    className="recipeDetails__image"
                  />
                </figure>
                <div className="recipeDetails__info">
                  <div className="recipeDetails__info__heading font__cursive">
                    <div className="title">
                      <span>{this.props.recipe.title}</span>
                    </div>
                    <div className="save">
                      {this.props.auth.isAuthenticated ? (
                        this.props.isSaved ? (
                          <i
                            className="fas fa-heart"
                            onClick={this.deleteRecipe}
                          />
                        ) : (
                          <i
                            className="far fa-heart"
                            onClick={this.saveRecipe}
                          />
                        )
                      ) : (
                        <i
                          className="far fa-heart"
                          onClick={this.showLoginError}
                        />
                      )}
                    </div>
                  </div>
                  <div className="recipeDetails__info__ingredients">
                    <div className="recipeDetails__info__ingredients__title font__cursive">
                      Ingredients
                    </div>

                    <ul className="recipeDetails__info__ingredients__list">
                      {this.props.recipe.ingredients.map(
                        (ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <button onClick={this.saveRecipe}>Save recipe</button>
                  <div className="recipeDetails__info__source">
                    Source: {this.props.recipe.publisher}
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipes.recipe,
  isFetchingRecipe: state.recipes.isFetchingRecipe,
  isSaved: state.recipes.isSaved,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { saveRecipe, isRecipeSaved, removeRecipe }
)(RecipeDetails);
