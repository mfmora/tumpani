import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';
import TagIndexContainer from './tag/tag_index_container';
import AttractionIndexContainer from './attraction/attraction_index_container';
import AttractionDetailContainer from './attraction/attraction_detail_container';

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
        <Route path="/home" component={ HomeContainer } onEnter={_redirectIfNotLoggedIn}>
          <IndexRoute component={ TagIndexContainer } />
          <Route path="search" component={ AttractionIndexContainer }>
          </Route>
          <Route path="attraction/:id" component={ AttractionDetailContainer } />
        </Route>
      </Router>
    </Provider>
  );


};

export  default Root;
