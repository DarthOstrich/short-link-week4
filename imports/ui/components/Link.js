import React, { Component } from 'react';
// import {browserHistory} from 'react-router';
import { Accounts } from 'meteor/accounts-base';


class Link extends Component {
  onLogout(){
    console.log('logout');
    Accounts.logout();
  }
  render(){
    return(
      <div>
        <h1>Short Links</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    )
  }
}

export default Link;