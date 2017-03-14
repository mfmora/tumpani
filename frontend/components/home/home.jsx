import React from 'react';
import { withRouter } from 'react-router';

class Home extends React.Component {

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
      <div>
        <h1>Home! Add Header Here</h1>
        <button onClick={this._logout}>Logout</button>
        { this.props.children }
      </div>
    )
  }
}

export default withRouter(Home);
