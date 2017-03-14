import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: "", formType: "login"};

    this._loadEvents.apply(this);
  }

  _loadEvents() {
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._changeFormType = this._changeFormType.bind(this);
    this._renderErrors = this._renderErrors.bind(this);
    this._cleanState = this._cleanState.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    const user = { username: this.state.username,
                   password: this.state.password
                 };

    const action = this._loginForm() ? this.props.login : this.props.signup;
    // if(this._loginForm()) {
    //   this.props.login(user).then(() => this._redirect());
    // } else {
    //   this.props.signup(user).then(() => this._redirect());
    // }
    action(user).then(() => this._cleanState()).then(() => this._redirect());
  }

  _cleanState() {
    this.state = {username: "", password: ""};
  }

  _redirect() {
    this.props.router.push('/home')
  }

  _handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  _loginForm() {
    return (this.state.formType === "login");
  }

  _changeFormType() {
    if(this._loginForm()) {
      this.setState({ formType: "signup" });
    } else {
      this.setState({ formType: "login" });
    }
    this.props.clearErrors();
  }

  _sessionInfo() {
    let session = {};
    if(this._loginForm()) {
      session = { header: "Log In",
                  footer: "New to Tumpani? ",
                  link: "Sign Up"
                }
    } else {
      session = { header: "Sign Up",
                  footer: "Already on Tumpani?",
                  link: "Log In"
                }
    }
    return session;
  }

  _renderErrors() {
    return this.props.errors.map(error => (
      <li>{ error }</li>
    ));
  }

  render() {
    let session = this._sessionInfo();
    let errors = this._renderErrors();
    return (
      <div onSubmit={this._handleSubmit}>
        <h2>{ session.header }</h2>
        <p>{ errors }</p>
        <form>
          <label>
            Username:
            <input type="text"
              id="username"
              value={this.state.username}
              onChange={this._handleChange}
            />
          </label>
          <label>
            Password:
            <input type="password"
              id="password"
              value={this.state.password}
              onChange={this._handleChange}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
        <p>
          { session.footer }
          <a href="#" onClick={ this._changeFormType }>
            { session.link }
          </a>
        </p>
      </div>
    );
  }
}

export default withRouter(SessionForm);
