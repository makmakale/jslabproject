import * as constants from '../constants';

export const addPosition = (position) => {
  return {
    type: constants.ADD_LOCATION,
    payload: position,
  };
};
