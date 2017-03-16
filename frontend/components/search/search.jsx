import React from 'react';
import { withRouter } from 'react-router';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this._handleClickSearch = this._handleClickSearch.bind(this);
  }

  _handleClickSearch(e) {
    e.preventDefault();
  }

  render () {
    return (
      <container id="search-bar">
        <i className="material-icons">search</i>
        <input onClick={ this._handleClickSearch }
               placeholder="Search"
               id="search-input" />
      </container>
    );
  }
}

export default Search;
