import * as constants from '../constants';
import {getItem, setItem} from '../storage';
import {resetMap} from '../map/actions';

export const fetchAllWaybills = () => (dispatch, getState) => {
  const driverId = getState().user.userId;

  return dispatch({
    type: constants.API,
    payload: {
      method: 'GET',
      url: `/waybills/mobile/${driverId}`,
      success: (res) => setAllWaybills(res),
      postProcessError: getAllWaybillsFromStorage(),
    },
  });
};

const setAllWaybills = (waybills) => (dispatch) => {
  setItem(constants.WAYBILLS_INFO, JSON.stringify(waybills)).then(() =>
    console.info('WAYBILLS_INFO saved to storage'),
  );

  return dispatch({
    type: constants.SET_ALL_WAYBILLS,
    payload: waybills,
  });
};

export const getAllWaybillsFromStorage = () => (dispatch) => {
  getItem(constants.WAYBILLS_INFO).then((list) => {
    const waybills = JSON.parse(list);
    if (!!waybills && !!waybills.length) {
      return dispatch(dispatchWaybills(waybills));
    }
  });
};

export const dispatchWaybills = (list) => ({
  type: constants.SET_ALL_WAYBILLS,
  payload: list,
});

export const finishWaybill = (id, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: 'PUT',
    url: `/waybills/mobile/finish/${id}`,
    success: () => dispatchFinishWaybill(),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

const dispatchFinishWaybill = () => (dispatch) => {
  dispatch(resetMap());
  dispatch(fetchAllWaybills());
};
