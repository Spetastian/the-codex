import { combineEpics } from 'redux-observable';
import userEpics from './userEpics';

export default combineEpics(userEpics);
