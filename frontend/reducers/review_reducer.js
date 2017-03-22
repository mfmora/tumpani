import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, state, action.review);
    default:
      return state;
  }
}

export default ReviewReducer;
