import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPage, setPage } from '../../redux/actions/recipeActions';

class PaginationButtons extends Component {
  constructor() {
    super();
    this.state = {};

    this.onClick = this.onClick.bind(this);
  }

  async onClick(e) {
    if (e.target.className === 'paginationButtons--prev') {
      await this.props.setPage(this.props.page - 1);
    } else {
      await this.props.setPage(this.props.page + 1);
    }

    this.props.getPage(this.props.searchQuery, this.props.page);
  }

  render() {
    return (
      <div className="paginationButtons">
        {this.props.page !== 1 ? (
          <button className="paginationButtons--prev" onClick={this.onClick}>
            Previous
          </button>
        ) : (
          <div className="paginationButtons--placeholder" />
        )}
        <button className="paginationButtons--next" onClick={this.onClick}>
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
