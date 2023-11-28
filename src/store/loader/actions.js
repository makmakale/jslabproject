import * as constants from '../constants';

export const toggleLoader = () => ({
  type: constants.TOGGLE_LOADER,
});

export const loaderOn = () => ({
  type: constants.SET_LOADER,
  payload: true,
});

export const loaderOff = () => ({
  type: constants.SET_LOADER,
  payload: false,
});
