import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';
import AttractionIndexContainer from './attraction/attraction_index_container';
import AttractionMap from './attraction_map/attraction_map';

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
        <Route path="/map" component={ AttractionMap } />
        <Route path="/home" component={ HomeContainer } onEnter={_redirectIfNotLoggedIn}>
          <Route path="search" component={ AttractionIndexContainer } />
        </Route>
      </Router>
    </Provider>
  );


};

export  default Root;
