import React, { Component } from 'react';
import { connect } from 'react-redux';

import Recipe from '../Recipe';
import Search from '../Search';
import { getRecipe } from '../../actions/recipeActions';

class RecipeResults extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      recipe: {},
    };

    this.onScroll = this.onScroll.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prevState => ({
      ...prevState,
      recipes: nextProps.recipes,
      recipe: nextProps.recipe,
    }));
  }

  onScroll(e) {
    document.querySelector('.recipe__container').scrollTop = e.target - 10;
  }

  onClick(id) {
    this.props.getRecipe(id);
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
            {this.state.recipes[0] ? (
              <React.Fragment>
                <div className="recipe__scrollbar">
                  <ul className="recipe__results" onScroll={this.onScroll}>
                    {this.state.recipes.map(recipe => (
                      <Recipe
                        recipe={recipe}
                        key={recipe.recipe_id}
                        onClick={this.onClick}
                      />
                    ))}
                  </ul>
                </div>
                <div className="recipe__details">
                  {this.state.recipe.title && (
                    <div>
                      <figure className="img__container">
                        <img
                          src={this.state.recipe.image_url}
                          alt={this.state.recipe.title}
                          className="recipe__details__image"
                        />
                      </figure>
                      <div className="recipe__details__container">
                        <h3>{this.state.recipe.title}</h3>
                        <h5 className="font__kepler">
                          Source: {this.state.recipe.publisher}
                        </h5>
                        <ol>
                          {this.state.recipe.ingredients.map(
                            (ingredient, index) => (
                              <li key={index}>{ingredient}</li>
                            )
                          )}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ) : (
              <div className="no__results__found">
                <h1>No recipes found</h1>
                <p className="font__kepler">Please try another search</p>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes,
  recipe: state.recipes.recipe,
});

export default connect(
  mapStateToProps,
  { getRecipe }
)(RecipeResults);
