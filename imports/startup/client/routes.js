import React from 'react';
import { browserHistory, Route, Router } from 'react-router';

// components
import Signup from './../../ui/components/Signup';
import Link from './../../ui/components/Link';
import NotFound from './../../ui/components/NotFound';
import Login from './../../ui/components/Login';

const publicPages = ['/', '/signup'];
const privatePages = ['/links'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/links');
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/links');
  }
};

export const onAuthChange = (isAuthenticated) => {
  // const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isPublicPage = publicPages.includes(pathname);
  const isPrivatePage = privatePages.includes(pathname);

  // if public page and logged in - let them in
  if (isPublicPage && isAuthenticated) {
    browserHistory.replace('/links');
  } else if (isPrivatePage && !isAuthenticated) {
  // if private page and not logged in - kick them out
    browserHistory.replace('/');
  }
}

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
    <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
    <Route path="*" component={NotFound} />
  </Router>
);

