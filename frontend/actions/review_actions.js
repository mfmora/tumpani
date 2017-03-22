import * as APIUtil from '../util/review_api_util';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
    .then( review => dispatch(receiveReview(review)))
);

export const fetchReviews = attractionId => dispatch => (
  APIUtil.fetchReviews(attractionId)
    .then( reviews => dispatch(receiveReviews(reviews)))
);
