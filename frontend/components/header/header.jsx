import React from 'react';
import SearchContainer from '../search/search_container';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this._logout = this._logout.bind(this);
    this._redirect = this._redirect.bind(this);
    this._redirectHome = this._redirectHome.bind(this);
    this._searchBookmarks = this._searchBookmarks.bind(this);
  }

  _logout() {
    this.props.logout().then(() => this._redirect());
  }

  _redirect() {
    if(!this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  _redirectHome() {
    this.props.router.push('/home');
  }

  _redirectBookmark() {
    this.props.router.push('/home/bookmarks');
  }

  _searchBookmarks(e) {
    this.props.fetchBookmarks().then(() => this._redirectBookmark());
  }

  render() {
    return(
      <section id="header">
        <a id="logo" onClick={this._redirectHome}>Tumpani</a>
        <SearchContainer />
        <span id="right-header">
          <a id="bookmarks" onClick={this._searchBookmarks}>Bookmarks</a>
          <a id="logout" onClick={this._logout}>Logout</a>
        </span>
        { this.props.children }
      </section>
    )
  }
}

export default withRouter(Header);
