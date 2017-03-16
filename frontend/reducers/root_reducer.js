import { combineReducers } from 'redux'
import SessionReducer from './session_reducer';
import AttractionReducer from './attraction_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  attractions: AttractionReducer
});

export default RootReducer;
