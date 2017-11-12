export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

export const userLogin = ({ email, password }) => ({
  type: USER_LOGIN,
  email,
  password
});

export const userLoginFail = () => ({ type: USER_LOGIN_FAIL });

export const userLoginSuccess = () => ({ type: USER_LOGIN_SUCCESS });
