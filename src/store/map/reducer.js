import * as constants from '../constants';

export default function mapReducer(state = [], action) {
  switch (action.type) {
    case constants.SET_ROUTE_POINTS:
      return action.payload;
    case constants.CHECK_ROUTE_POINT:
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            isChecked: true,
          };
        }
        return item;
      });
    case constants.RESET_ROUTES:
      return [];
    default:
      return state;
  }
}
