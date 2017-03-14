import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, _defaultState, {currentUser});
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, _defaultState, { errors });
    default:
      return state
  }
}

export default SessionReducer;
