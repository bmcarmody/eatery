import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateRecipes } from '../../actions/recipeActions';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onClick(e) {
    e.preventDefault();
    console.log('Submitted!');
    this.props.generateRecipes(this.state.searchQuery, this.props.history);
  }

  render() {
    return (
      <main>
        <div className="landing__image" />
        <div className="landing--center">
          <h1 className="landing__title">Search for Recipes</h1>
          <div className="landing__field">
            <input
              className="landing__search"
              name="searchQuery"
              type="textbox"
              placeholder="Search Recipes"
              autoFocus
              onChange={this.onChange}
            />
            <button onClick={this.onClick}>
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
});

export default connect(
  mapStateToProps,
  { generateRecipes }
)(Landing);
