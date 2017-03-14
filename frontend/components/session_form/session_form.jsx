import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: "", formType: "login"};

    this.loadEvents.apply(this);

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleUsername = this.handleUsername.bind(this);
    // this.handlePassword = this.handlePassword.bind(this);
    // this.changeFormType = this.changeFormType.bind(this);
  }

  loadEvents() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.changeFormType = this.changeFormType.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
    this.state = {username: "", password: ""};
  }

  redirect() {
    this.props.router.push('/')
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  changeFormType() {
    if(this.state.formType === "login") {
      this.setState({ formType: "signup" });
    } else {
      this.setState({ formType: "login" });
    }
  }

  render() {

    let session_header;
    let session_footer;
    let session_footer_link;
    if(this.state.formType === "login") {
      session_header = "Log In";
      session_footer = "New to Tumpani? ";
      session_footer_link = "Sign Up"
    } else {
      session_header = "Sign Up";
      session_footer = "Already on Tumpani? ";
      session_footer_link = "Log In"
    }

    return (
      <div onSubmit={this.handleSubmit}>
        <h2>{ session_header }</h2>
        <form>
          <label>
            Username:
            <input type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </label>
          <label>
            Password:
            <input type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
        <p>
          { session_footer }
          <a href="#" onClick={ this.changeFormType }>
            {session_footer_link}
          </a>
        </p>
      </div>
    );
  }
}

export default SessionForm;
