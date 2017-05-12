import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker';

//collections
import { Links } from './../../api/links';

class LinksList extends Component {
  constructor(props){
    super(props)

    this.state = {
      links: []
    };
  }//end of constructor
  componentDidMount() {
    console.log('componentsDidMount LinksList');
    this.linksTracker = Tracker.autorun(() => {
      const links = Links.find().fetch();
      this.setState({ links });
    });
  }
  componentWillUnmount() {
    console.log('componentsWillUnmount LinksList');
    this.linksTracker.stop();
  }
  renderLinksListItems(){
    return this.state.links.map((link) => {
      return (
        <li key={link._id}>{link.url}</li>
      )
    })
  }
  render() {
    return (
      <div>
        <p>LinksList</p>
        <ul>
          {this.renderLinksListItems()}
        </ul>
      </div>
    );
  }
};

export default LinksList;