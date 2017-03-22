import { combineReducers } from 'redux'
import SessionReducer from './session_reducer';
import AttractionReducer from './attraction_reducer';
import ReviewReducer from './review_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  attractions: AttractionReducer,
  reviews: ReviewReducer
});

export default RootReducer;
