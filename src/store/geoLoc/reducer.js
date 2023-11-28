import * as constants from '../constants';

const defaultState = {
  coords: [],
  isActive: false,
};

export default function geoLocationReducer(state = defaultState, action) {
  switch (action.type) {
    case constants.START_WATCH_LOCATION:
      return {...state, isActive: true};
    case constants.ADD_LOCATION:
      return {...state, coords: [action.payload, ...state.coords]};
    case constants.STOP_WATCH_LOCATION:
      return {...state, isActive: false};
    default:
      return state;
  }
}
