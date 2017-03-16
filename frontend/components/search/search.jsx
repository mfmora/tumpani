import React from 'react';
import { withRouter } from 'react-router';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = { text: ''};
    this._handleClick = this._handleClick.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
  }

  _handleChange(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.search(this.state.text);
    }
  }

  render () {
    return (
      <container id="search-bar">
        <i className="material-icons">search</i>
        <input onClick={ this._handleClick }
               value={ this.state.text }
               onKeyPress={ this._handleKeyPress }
               onChange={ this._handleChange }
               placeholder="Search"
               id="search-input" />
      </container>
    );
  }
}

export default Search;
