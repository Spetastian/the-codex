import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
  firebase: firebaseStateReducer
});
