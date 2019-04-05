import React, { Component } from 'react';
import { connect } from 'react-redux';

import Recipe from '../atoms/Recipe';
import PaginationButtons from '../molecules/PaginationButtons';
import { getRecipe } from '../../actions/recipeActions';

class RecipeSidebar extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(id) {
    this.props.getRecipe(id);
  }

  render() {
    return (
      <div className="recipe__scrollbar">
        <ul className="recipe__results" onScroll={this.props.onScroll}>
          {this.props.recipes.map(recipe => (
            <Recipe
              recipe={recipe}
              key={recipe.recipe_id}
              onClick={this.onClick}
            />
          ))}
          <li>
            <PaginationButtons />
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes,
});

export default connect(
  mapStateToProps,
  { getRecipe }
)(RecipeSidebar);
