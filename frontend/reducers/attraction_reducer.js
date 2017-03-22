import { RECEIVE_ATTRACTIONS, RECEIVE_ATTRACTION, RECEIVE_REVIEW } from '../actions/attraction_actions';
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
    case RECEIVE_REVIEW:
      const review = action.review;
      let newState = merge({}, state)
      newState[review.attraction_id].reviews.push(review)
      return newState;
    default:
      return state;
  }
}

export default AttractionReducer;
