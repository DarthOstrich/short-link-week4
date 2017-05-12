import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
// import { Accounts } from 'meteor/accounts-base';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      error: ''
    }
  }
  handleSubmit(e) {
    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();
    e.preventDefault();

    Meteor.loginWithPassword({email}, password, (err) => {
      // console.log('login callback', err);
      if (err) {
        this.setState({
          error: 'Unable to login. Check email and password'
        });
      } else {
        this.setState({ error: '' })
      }
    });
  }
  render(){
    return(
      <div>
        <h1>Login</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.handleSubmit.bind(this)} noValidate>
          <input type="email" ref="email" placeholder="Email" />
          <input type="password" ref="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <Link to="/signup">Need an Account?</Link>
      </div>
    )
  }
}

export default Login;