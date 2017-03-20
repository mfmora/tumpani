import * as APIUtil from '../util/attraction_api_util';
export const RECEIVE_ATTRACTIONS = 'RECEIVE_ATTRACTIONS';
export const RECEIVE_ATTRACTION = 'RECEIVE_ATTRACTION';

const receiveAttractions = attractions => ({
  type: RECEIVE_ATTRACTIONS,
  attractions
});

export const search = text => dispatch => (
  APIUtil.search(text)
    .then( attractions => dispatch(receiveAttractions(attractions)))
);
