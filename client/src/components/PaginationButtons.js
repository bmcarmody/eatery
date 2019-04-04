import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPage, setPage } from '../actions/recipeActions';

class PaginationButtons extends Component {
  constructor() {
    super();
    this.state = {};

    this.onClick = this.onClick.bind(this);
  }

  async onClick(e) {
    if (e.target.className === 'pagination--prev') {
      await this.props.setPage(this.props.page - 1);
    } else {
      await this.props.setPage(this.props.page + 1);
    }

    this.props.getPage(this.props.searchQuery, this.props.page);
  }

  render() {
    return (
      <div className="pagination">
        {this.props.page !== 1 ? (
          <button
            className="pagination--prev"
            onClick={this.onClick}
          >
            Previous
          </button>
        ) : (
          <div className="pagination--placeholder" />
        )}
        <button
          className="pagination--next"
          onClick={this.onClick}
        >
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
