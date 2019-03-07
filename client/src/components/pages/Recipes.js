import React, { Component } from 'react';
import { connect } from 'react-redux';

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipes) {
      this.setState({
        recipes: nextProps.recipes,
      });
    }
  }

  render() {
    return (
      <div className="recipe">
        <div className="recipe__image" />
        <div className="recipe__container">
          <ul>
            {this.state.recipes.map(recipe => (
              <li key={recipe.recipe_id}>
                <a className="results__link" href={`#${recipe.recipe_id}`}>
                  <figure className="results__fig">
                    <img src={recipe.image_url} alt={recipe.title} />
                  </figure>
                  <div className="results__data">
                    <h4 className="results__name">${recipe.title}</h4>
                    <p className="results__author">${recipe.publisher}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps)(Recipes);
