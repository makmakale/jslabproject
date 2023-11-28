import * as constants from '../constants';

export default function actsReducer(state = [], action) {
  switch (action.type) {
    case constants.SET_ACTS:
      return action.payload;
    default:
      return state;
  }
}
