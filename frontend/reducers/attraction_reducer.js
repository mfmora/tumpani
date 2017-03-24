import { RECEIVE_ATTRACTIONS, RECEIVE_ATTRACTION, RECEIVE_REVIEW, RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from '../actions/attraction_actions';
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
      let newState = merge({}, state);
      const indexReview = newState[review.attraction_id].reviews.findIndex(oldReview => {
        return oldReview.id === review.id;
      });
      if(indexReview === -1) {
        newState[review.attraction_id].reviews.push(review);
      } else {
        newState[review.attraction_id].reviews[indexReview] = review;
      }
      newState[review.attraction_id].userReview = [review];
      return newState;
    case RECEIVE_BOOKMARK:
      newState = merge({}, state);
      newState[action.bookmark.attraction_id].bookmark = true;
      return newState;
    case REMOVE_BOOKMARK:
      newState = merge({}, state);
      newState[action.bookmark.attraction_id].bookmark = false;
      return newState;
    default:
      return state;
  }
}

export default AttractionReducer;
