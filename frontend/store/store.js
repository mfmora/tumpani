import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, createLogger())
  )
);

export default configureStore;
