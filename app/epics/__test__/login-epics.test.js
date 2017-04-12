'use strict'

import nock from 'nock';
import expect from 'expect';
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../../actions/types'
import { userLoginSuccess, userLoginFailure, userLoginRequest } from '../../actions/creators'
import loginEpicsCreator from '../login-epics';
import { ActionsObservable } from 'redux-observable'
import Rx from "rxjs/Rx";

const fakeConfig = {
  authApiUrl : 'fakeurl.test.com'
};

describe('loginEpics', () => {  

  afterEach(() => {
    nock.cleanAll();
  });


  describe('when authentication is successfull', () => {

    const fakeUserServiceWithSuccessfullAuthentication = {
      authenticate () {
        return Rx.Observable.create(function (observer) {
            observer.next('Authentication successfull');
            observer.complete();
        });
      }
    }

    const { loginRequestEpic, loginSuccessEpic } = loginEpicsCreator(fakeUserServiceWithSuccessfullAuthentication);
    
    it('returns USER_LOGIN_SUCCESS action', () => {
      const actions$ = ActionsObservable.of(userLoginRequest('username', 'password'));
      return loginRequestEpic(actions$).toPromise()
        .then((actionReceived) => {
          expect(actionReceived.type).toBe(USER_LOGIN_SUCCESS)
        })
    });
  });

  describe('when authentication is unsuccessfull', () => {
    
    const fakeUserServiceWithUnsuccessfullAuthentication = {
      authenticate () {
          return Rx.Observable.of(1)
            .map(x => { throw new Error('oh no')})
      }
    }

    const { loginRequestEpic, loginSuccessEpic } = loginEpicsCreator(fakeUserServiceWithUnsuccessfullAuthentication);
    
    it('returns USER_LOGIN_FAILURE action', () => {
      const actions$ = ActionsObservable.of(userLoginRequest('username', 'password'));
      return loginRequestEpic(actions$).toPromise()
        .then((actionReceived) => {
          console.log(actionReceived)
          expect(actionReceived.type).toBe(USER_LOGIN_FAILURE)
        })
    });
  });

});