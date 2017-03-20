import { RECEIVE_ATTRACTIONS, RECEIVE_ATTRACTION } from '../actions/attraction_actions';
import merge from 'lodash/merge';

const AttractionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ATTRACTIONS:
      let attractions = action.attractions;
      return action.attractions;
    case RECEIVE_ATTRACTION:
      let attraction = action.attraction;
      return merge({}, state, { attraction });
    default:
      return state;
  }
}

export default AttractionReducer;
