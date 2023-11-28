import * as constants from '../constants';

export default function waybillReducer(state = [], action) {
  switch (action.type) {
    case constants.SET_ALL_WAYBILLS:
      return action.payload;
    case constants.RESET_WAYBILLS:
      return [];
    default:
      return state;
  }
}
