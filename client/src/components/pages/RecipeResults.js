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
        <Search />
        <div className="recipe">
          <div className="recipe__background-image" />
          <div className="recipe__container">
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
                <p>{this.state.recipe.ingredients}</p>
              </div>
            </div>
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
