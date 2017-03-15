import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this._logout = this._logout.bind(this);
    this._redirect = this._redirect.bind(this);
  }

  _logout() {
    this.props.logout().then(() => this._redirect());
  }

  _redirect() {
    if(!this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  render() {
    return(
      <section id="header">
        <a id="logout" onClick={this._logout}>Logout</a>
        { this.props.children }
      </section>
    )
  }
}

export default withRouter(Header);
