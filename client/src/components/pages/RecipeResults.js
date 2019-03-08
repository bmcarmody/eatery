import React, { Component } from 'react';
import { connect } from 'react-redux';

import Recipe from '../Recipe';

class RecipeResults extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipes) {
      this.setState({
        recipes: nextProps.recipes,
      });
    }
  }

  onScroll(e) {
    document.querySelector('.recipe__container').scrollTop = e.target - 10;
  }

  render() {
    return (
      <div className="recipe">
        <div className="recipe__background-image" />
        <div className="recipe__container">
          <div className="recipe__scrollbar">
            <ul className="recipe__results" onScroll={this.onScroll}>
              {this.state.recipes.map(recipe => (
                <Recipe recipe={recipe} />
              ))}
            </ul>
          </div>
          <div className="recipe__details">Test</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps)(RecipeResults);
