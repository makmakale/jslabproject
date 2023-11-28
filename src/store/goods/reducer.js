import * as constants from '../constants';

export default function goodsReducer(state = [], action) {
  switch (action.type) {
    case constants.SET_PRODUCTS:
      return action.payload;
    case constants.ADD_PRODUCT:
      return state.concat(action.payload);
    case constants.UPDATE_PRODUCT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {...item, ...action.payload.data};
        } else {
          return item;
        }
      });
    case constants.REMOVE_PRODUCT:
      return state.filter((item) => item.id !== action.payload);
    case constants.RESET_PRODUCTS:
      return [];
    default:
      return state;
  }
}
