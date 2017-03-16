import { RECEIVE_ATTRACTIONS, RECEIVE_ATTRACTION } from '../actions/attraction_actions';
import merge from 'lodash/merge';

const _defaultState = {
  attractions: {},
  attraction: null
}

const AttractionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ATTRACTIONS:
      debugger;
      let attractions = action.attractions;
      return merge({}, _defaultState, { attractions });
    case RECEIVE_ATTRACTION:
      let attraction = action.attraction;
      return merge({}, state, { attraction });
    default:
      return state;
  }
}

export default AttractionReducer;
