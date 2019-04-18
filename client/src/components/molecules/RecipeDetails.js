import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingAnimation from '../atoms/LoadingAnimation';

import { saveRecipe } from '../../redux/actions/recipeActions';

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
      <div className="recipeDetails" onScroll={this.props.onScroll}>
        {this.props.isFetchingRecipe ? (
          <div className="recipeDetails__loading__animation">
            <LoadingAnimation />
          </div>
        ) : (
          <React.Fragment>
            {this.props.recipe.title && (
              <div className="recipeDetials__container">
                <figure className="img__container">
                  <img
                    src={this.props.recipe.image_url}
                    alt={this.props.recipe.title}
                    className="recipeDetails__image"
                  />
                </figure>
                <div className="recipeDetails__info">
                  <h3 className="font__cursive">{this.props.recipe.title}</h3>
                  <h5>Source: {this.props.recipe.publisher}</h5>
                  <ul className="recipeDetails__info__ingredients">
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
