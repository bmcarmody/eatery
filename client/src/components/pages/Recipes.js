import React, { Component } from 'react';
import { connect } from 'react-redux';

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipes) {
      nextProps.recipes.forEach((element, index) => {
        this.setState(prevState => ({
          recipes: {
            ...prevState.recipes,
            [index]: element,
          },
        }));
      });
    }
  }

  render() {
    return (
      <div className="recipe">
        <div className="recipe__image" />
        <div className="recipe__container">Test</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps)(Recipes);
