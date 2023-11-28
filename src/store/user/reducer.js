import * as constants from '../constants';

const defaultState = {
  userId: null,
  fullName: null,
  token: null,
  isLoggedIn: false,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case constants.SET_USER_INFO:
      return {...action.payload};
    case constants.RESET_USER_INFO:
      return {...defaultState};
    default:
      return state;
  }
}
