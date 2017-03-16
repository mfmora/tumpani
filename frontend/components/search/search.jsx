import React from 'react';
import { withRouter } from 'react-router';

class Search extends React.Component {

  render () {
    return (
      <container id="search-bar">
        <i className="material-icons">search</i>
        <input placeholder="Search" id="search-input"></input>
      </container>
    );
  }
}

export default Search;
