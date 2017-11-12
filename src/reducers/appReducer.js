import { APP_INITIATED } from '../actions/appActions';

const initialState = {
  initiated: false
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case APP_INITIATED:
      return {
        initiated: true
      };

    default:
      return state;
  }
}

export default userReducer;
