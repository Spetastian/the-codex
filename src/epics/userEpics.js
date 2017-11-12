import { combineEpics } from 'redux-observable';
import { 
  USER_LOGIN,
  userLoginSuccess,
  userLoginFail
} from '../actions/userActions';

const loginEpic = (action$) => 
  action$.ofType(USER_LOGIN)

export default combineEpics();