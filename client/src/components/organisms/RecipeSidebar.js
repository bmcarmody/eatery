import React, { Component } from 'react';
import { connect } from 'react-redux';

import Recipe from '../atoms/Recipe';
import PaginationButtons from '../molecules/PaginationButtons';
import { getRecipe } from '../../redux/actions/recipeActions';

class RecipeSidebar extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(id) {
    try {
      const recipeSelector = document.querySelector('.recipe__active');
      recipeSelector.classList.remove('recipe__active');
    } catch (e) {
    } finally {
      const recipeIdSelector = document.querySelector(`.recipe${id}`);
      recipeIdSelector.classList.add('recipe__active'); //Found in Recipe.scss
    }

    this.props.getRecipe(id);
  }

  render() {
    return (
      <div className="recipeSidebar">
        <ul className="recipeSidebar__results" onScroll={this.props.onScroll}>
          {this.props.recipes.map(recipe => (
            <Recipe
              recipe={recipe}
              key={recipe.recipe_id}
              onClick={this.onClick}
            />
          ))}
          {this.props.page !== 'savedRecipes' &&
            (this.props.recipes.length === 30 && (
              <li>
                <PaginationButtons />
              </li>
            ))}
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
