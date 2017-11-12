import { combineEpics } from 'redux-observable';
import {
  USER_LOGIN,
  userLoginSuccess,
  userLoginFail
} from '../actions/userActions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const loginEpic = action$ =>
  action$
    .ofType(USER_LOGIN)
    .do(console.log)
    .map(() => ({ type: 'XXX' }));

export default loginEpic;
