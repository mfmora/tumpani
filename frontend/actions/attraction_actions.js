import * as APIUtil from '../util/attraction_api_util';
export const RECEIVE_ATTRACTIONS = 'RECEIVE_ATTRACTIONS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

const receiveAttractions = attractions => ({
  type: RECEIVE_ATTRACTIONS,
  attractions
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveBookmark = bookmark => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

const removeBookmark = bookmark => ({
  type: REMOVE_BOOKMARK,
  bookmark
});

export const fetchBookmarks = () => dispatch => (
  APIUtil.fetchBookmarks()
    .then( attractions => dispatch(receiveAttractions(attractions)))
);

export const addBookmark = bookmark => dispatch => (
  APIUtil.addBookmark(bookmark)
    .then( bookmark => dispatch(receiveBookmark(bookmark)))
);

export const deleteBookmark = bookmark => dispatch => (
  APIUtil.deleteBookmark(bookmark)
    .then( bookmark => dispatch(removeBookmark(bookmark)))
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
    .then( review => dispatch(receiveReview(review)))
);

export const editReview = review => dispatch => (
  APIUtil.editReview(review)
    .then( review => dispatch(receiveReview(review)))
);

export const search = text => dispatch => (
  APIUtil.search(text)
    .then( attractions => dispatch(receiveAttractions(attractions)))
);

export const searchTag = tag => dispatch => (
  APIUtil.searchTag(tag)
    .then( attractions => dispatch(receiveAttractions(attractions)))
);
