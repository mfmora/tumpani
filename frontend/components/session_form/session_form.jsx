import React from 'react';
import { withRouter } from 'react-router';
// import { Button } from 'react-toolbox/lib/button';

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
    this._demoLogin = this._demoLogin.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    const user = { username: this.state.username,
                   password: this.state.password
                 };

    const action = this._loginForm() ? this.props.login : this.props.signup;

    action(user).then(() => this._cleanState()).then(() => this._redirect());
  }

  _cleanState() {
    this.state = { username: "", password: "", formType: this.state.formType };
  }

  _demoLogin(e) {
    e.preventDefault();
    let demo = { username: "demo", password: "secret" };
    this.props.login(demo).then(() => this._cleanState()).then(() => this._redirect());
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
                  button: "Login",
                  footer: "New to Tumpani? ",
                  link: "Sign Up"
                }
    } else {
      session = { header: "Sign Up",
                  button: "Signup",
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
      <section id="session-form">
        <h2>{ session.header }</h2>
        <p>{ errors }</p>
        <form>
          <label><h3>Username</h3>
            <input type="text"
              id="username"
              value={this.state.username}
              onChange={this._handleChange}
            />
          </label>
          <label><h3>Password</h3>
            <input type="password"
              id="password"
              value={this.state.password}
              onChange={this._handleChange}
            />
          </label>
          <section id="buttons">
            <button onClick={this._handleSubmit}>{ session.button }</button>
            <button onClick={ this._demoLogin }>Demo</button>
          </section>
        </form>
        <h4>
          { session.footer }
          <a href="#" onClick={ this._changeFormType }>
            { session.link }
          </a>
        </h4>
      </section>
    );
  }
}

export default withRouter(SessionForm);
