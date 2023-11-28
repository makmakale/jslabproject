import * as constants from '../constants';

export default function loadingReducer(state = false, action) {
  switch (action.type) {
    case constants.TOGGLE_LOADER:
      return !state;
    case constants.SET_LOADER:
      return action.payload;
    default:
      return state;
  }
}
