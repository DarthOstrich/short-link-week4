import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import LinksList from './LinksList';

//collections
import { Links } from '../../api/links';


class Link extends Component {
  onLogout(){
    console.log('logout');
    Accounts.logout();
  }
  handleSubmit(e){
    e.preventDefault();
    const url = this.refs.url.value.trim();
    console.log(url);
    if (url) {
      Links.insert({ url });
      this.refs.url.value = '';
    }
  }
  render(){
    return(
      <div>
        <h1>Short Links</h1>
        <LinksList />
        <h2>Add Link</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="url"/>
          <button type="submit">Add Link</button>
        </form>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    )
  }
}

export default Link;