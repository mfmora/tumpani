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
    this._handleIconClick = this._handleIconClick.bind(this);
    this._redirect = this._redirect.bind(this);
    this._search = this._search.bind(this);
  }

  _redirect() {
    this.props.router.push('/home/search');
  }

  _handleClick(e) {
    e.preventDefault();
    e.target.parentElement.parentNode.classList.add('searching');
    e.target.select();
  }

  _handleChange(e) {
    e.preventDefault();
    if(e.target.value.length > 0) {
      e.target.nextSibling.classList.add('active-search');
    } else{
      e.target.nextSibling.classList.remove('active-search');
    }

    this.setState({ text: e.target.value });
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this._search(this.state.text);
    }
  }

  _handleIconClick(e) {
    e.preventDefault();
    if(this.state.text.length > 0) {
      this._search(this.state.text);
    }
  }

  _search(text) {
    this.props.search(text).then(() => this._redirect());
  }

  render () {
    return (
      <container id="search-bar">
        <input onClick={ this._handleClick }
               value={ this.state.text }
               onKeyPress={ this._handleKeyPress }
               onChange={ this._handleChange }
               placeholder="Search"
               id="search-input" />
        <i className="material-icons"
           onClick={ this._handleIconClick }>
          search
        </i>
      </container>
    );
  }
}

export default withRouter(Search);
