import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT
} from '../actions/userActions';

const initialState = {
  authenticated: false
};

function userReducer(state = initialState, action) {
  switch(action.type) {
    case USER_LOGGED_IN:
      return {
        authenticated: true
      };
    case USER_LOGGED_OUT:
      return {
        authenticated: false
      };
    default:
      return state;
  }
}

export default userReducer;
