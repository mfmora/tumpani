import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if(store.getState().session.currentUser) {
      replace('/home');
    }
  }

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    if(!store.getState().session.currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter={_redirectIfLoggedIn} />
        <Route path="/home" component={ HomeContainer } onEnter={_redirectIfNotLoggedIn} />
      </Router>
    </Provider>
  );


};

export  default Root;
