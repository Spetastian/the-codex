import { combineEpics } from 'redux-observable';
import {
  USER_LOGOUT,
  userLogoutSuccess,
  userLogoutFail,
  USER_CREATE,
  userCreateSuccess,
  userCreateFail,
  USER_LOGIN,
  userLoginSuccess,
  userLoginFail,
  setUserLoggedIn,
  setUserLoggedOut
} from '../actions/userActions';

import { APP_INIT, appInitiated } from '../actions/appActions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

const createAuthStateChangeObservable = firebase =>
  Observable.create(observer => {
    firebase.auth().onAuthStateChanged(user => {
      observer.next(user);
    });
  });

const registerEpic = (action$, store, { firebase }) =>
  action$
    .ofType(USER_CREATE)
    .mergeMap(({ email, password }) =>
      Observable.fromPromise(
        firebase.auth().createUserWithEmailAndPassword(email, password)
      )
    )
    .map(() => userCreateSuccess())
    .catch(err => {
      console.log('Something went wrong');
      console.error(err);
      return Observable.of(userCreateFail(err));
    });

const loginEpic = (action$, store, { firebase }) =>
  action$
    .ofType(USER_LOGIN)
    .mergeMap(({ email, password }) =>
      Observable.fromPromise(
        firebase.auth().signInWithEmailAndPassword(email, password)
      )
    )
    .map(() => userLoginSuccess())
    .catch(err => {
      console.log('Something went wrong');
      console.error(err);
      return Observable.of(userLoginFail(err));
    });

const logoutEpic = (action$, store, { firebase }) =>
  action$
    .ofType(USER_LOGOUT)
    .mergeMap(({ email, password }) =>
      Observable.fromPromise(firebase.auth().signOut())
    )
    .map(() => userLogoutSuccess())
    .catch(err => {
      console.log('Something went wrong');
      console.error(err);
      return Observable.of(userLogoutFail(err));
    });

const authStateChangeEpic = (action$, store, { firebase }) =>
  action$.ofType(APP_INIT).mergeMap(() =>
    Observable.merge(
      createAuthStateChangeObservable(firebase).map(user => {
        if (user) {
          return setUserLoggedIn(user);
        } else {
          return setUserLoggedOut();
        }
      }),
      Observable.of(appInitiated())
    )
  );

export default combineEpics(
  registerEpic,
  loginEpic,
  logoutEpic,
  authStateChangeEpic
);
