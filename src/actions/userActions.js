export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_FAIL = 'USER_LOGOUT_FAIL';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export const USER_CREATE = 'USER_CREATE';
export const USER_CREATE_FAIL = 'USER_CREATE_FAIL';
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';

export const userLogin = ({ email, password }) => ({
  type: USER_LOGIN,
  email,
  password
});
export const userLoginFail = ({ code, message }) => ({
  type: USER_LOGIN_FAIL,
  code,
  message
});
export const userLoginSuccess = () => ({ type: USER_LOGIN_SUCCESS });

export const userLogout = () => ({
  type: USER_LOGOUT
});
export const userLogoutFail = ({ code, message }) => ({
  type: USER_LOGOUT_FAIL,
  code,
  message
});
export const userLogoutSuccess = () => ({ type: USER_LOGOUT_SUCCESS });

export const userCreate = ({ email, password }) => ({
  type: USER_CREATE,
  email,
  password
});
export const userCreateFail = ({ code, message }) => ({
  type: USER_CREATE_FAIL,
  code,
  message
});
export const userCreateSuccess = () => ({ type: USER_CREATE_SUCCESS });

export const setUserLoggedIn = user => ({ type: USER_LOGGED_IN, user });

export const setUserLoggedOut = () => ({ type: USER_LOGGED_OUT });
