import React, { Component } from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
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

    Accounts.createUser({email, password}, (err) => {
      console.log('signup callback', err);
      if (error) {
        this.setState({
          error: err.reason
        })
      }
    });
  }
  render(){
    return(
      <div>
        <h1>Signup</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="email" ref="email" placeholder="Email" />
          <input type="password" ref="password" placeholder="Password" />
          <button type="submit">Create Account</button>
        </form>
        <Link to="/">Already have an account?</Link>
      </div>
    )
  }
}

export default Signup;