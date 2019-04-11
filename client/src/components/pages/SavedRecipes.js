import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingAnimation from '../atoms/LoadingAnimation';
import RecipeSidebar from '../organisms/RecipeSidebar';
import RecipeDetails from '../molecules/RecipeDetails';

import { fetchRecipes } from '../../redux/actions/recipeActions';

class SavedRecipes extends Component {
  constructor() {
    super();
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  onScroll(e) {
    document.querySelector('.savedRecipes__container').scrollTop =
      e.target - 10;
  }

  render() {
    return (
      <React.Fragment>
        <div className="savedRecipes">
          <div className="savedRecipes__background-image" />
          <div className="savedRecipes__container">
            {this.props.isFetchingRecipes ? (
              <div className="savedRecipes__grid--center">
                <div className="center-item">
                  <LoadingAnimation />
                </div>
              </div>
            ) : (
              <React.Fragment>
                {this.props.recipes[0] ? (
                  <div className="savedRecipes__grid--results">
                    <RecipeSidebar
                      page="savedRecipes"
                      onScroll={this.onScroll}
                    />
                    <RecipeDetails />
                  </div>
                ) : (
                  <div className="savedRecipes__grid--center">
                    <div className="center-item no__results__found">
                      <h1>You haven't saved any recipes!</h1>
                      <p className="font__kepler">
                        Search for your favorite recipes and click the heart
                        icon
                      </p>
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes,
  isFetchingRecipes: state.recipes.isFetchingRecipes,
});

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(SavedRecipes);
