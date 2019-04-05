import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingAnimation from '../atoms/LoadingAnimation';

import { saveRecipe } from '../../actions/recipeActions';

class RecipeDetails extends Component {
  constructor() {
    super();
    this.saveRecipe = this.saveRecipe.bind(this);
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

  render() {
    return (
      <div className="recipe__details">
        {this.props.isFetchingRecipe ? (
          <div className="recipe__loading">
            <LoadingAnimation />
          </div>
        ) : (
          <React.Fragment>
            {this.props.recipe.title && (
              <div>
                <figure className="img__container">
                  <img
                    src={this.props.recipe.image_url}
                    alt={this.props.recipe.title}
                    className="recipe__details__image"
                  />
                </figure>
                <div className="recipe__details__container">
                  <h3>{this.props.recipe.title}</h3>
                  <h5 className="font__kepler">
                    Source: {this.props.recipe.publisher}
                  </h5>
                  <ul>
                    {this.props.recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <button onClick={this.saveRecipe}>Save recipe</button>
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
});

export default connect(
  mapStateToProps,
  { saveRecipe }
)(RecipeDetails);