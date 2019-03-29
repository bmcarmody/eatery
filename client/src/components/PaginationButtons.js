import React, { Component } from 'react';
import { connect } from 'react-redux';

class PaginationButtons extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
    };

    this.onClick = this.onClick.bind(this);
  }

  async onClick(e) {
    if (e.target.className === 'prev') {
      await this.setState(prevState => ({
        page: prevState.page - 1,
      }));
    } else {
      await this.setState(prevState => ({
        page: prevState.page + 1,
      }));
    }

    this.props.getNextPage(this.props.searchQuery, this.state.page);
  }

  render() {
    return (
      <div>
        {this.state.page !== 1 && <button className="prev">Previous</button>}
        <button className="next" onClick={this.onClick}>
          Next
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchQuery: state.recipes.searchQuery,
});

export default connect(mapStateToProps)(PaginationButtons);
