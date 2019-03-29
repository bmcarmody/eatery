import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { generateRecipes, setPage } from '../actions/recipeActions';

class Search extends Component {
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
    this.props.history.push('/recipes');
    this.props.setPage(1);
    this.props.generateRecipes(this.state.searchQuery);
  }

  render() {
    return (
      <React.Fragment>
        <input
          name="searchQuery"
          type="textbox"
          placeholder="Search Recipes"
          autoFocus
          onChange={this.onChange}
        />
        <button onClick={this.onClick}>
          <i className="fas fa-search" />
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
});

export default connect(
  mapStateToProps,
  { generateRecipes, setPage }
)(withRouter(Search));
