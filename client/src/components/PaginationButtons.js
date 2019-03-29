import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPage, setPage } from '../actions/recipeActions';

class PaginationButtons extends Component {
  constructor() {
    super();
    this.state = {
      statePage: 1,
    };

    this.onClick = this.onClick.bind(this);
  }

  async onClick(e) {
    if (e.target.className === 'prev') {
      await this.props.setPage(this.props.page - 1);
    } else {
      await this.props.setPage(this.props.page + 1);
    }

    this.props.getPage(this.props.searchQuery, this.props.page);
  }

  render() {
    return (
      <div>
        {this.props.page !== 1 && (
          <button className="prev" onClick={this.onClick}>
            Previous
          </button>
        )}
        {console.log(this.state.page)}
        <button className="next" onClick={this.onClick}>
          Next
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchQuery: state.recipes.searchQuery,
  page: state.recipes.page,
});

export default connect(
  mapStateToProps,
  { getPage, setPage }
)(PaginationButtons);
