import * as constants from '../constants';
import {dispatchResetProduct} from '../goods/actions';
import {deleteItem, getItem, setItem} from '../storage';
import stringToDate from '../../services/date';

export const fetchAllActs = () => (dispatch, getState) => {
  const driverId = getState().user.userId;

  return dispatch({
    type: constants.API,
    payload: {
      method: 'GET',
      url: `/reports/mobile/${driverId}`,
      success: (acts) => setActs(acts),
      postProcessError: getActsFromStorage(),
    },
  });
};

export const getActsFromStorage = () => (dispatch) => {
  getItem(constants.ACTS_INFO).then((res) => {
    if (!res) {
      return;
    }

    let acts = JSON.parse(res);
    if (!acts.length) {
      return;
    }

    return dispatch(setActs(acts));
  });
};

const setActs = acts => dispatch => {
  let prepareActs = acts.map(item => {
    return {
      ...item,
      reportedAt: stringToDate(item.reportedAt),
      consignment_note: {
        ...item.consignment_note,
        issuedDate: stringToDate(item.consignment_note.issuedDate),
      },
    };
  });

  setItem(constants.ACTS_INFO, JSON.stringify(prepareActs)).then(() =>
    console.log('Acts has saved to storage'),
  );

  return dispatch({
    type: constants.SET_ACTS,
    payload: prepareActs,
  });
};

export const dispatchAddAct = (data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: 'POST',
    url: `/reports/register`,
    data,
    success: () => addAct(),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

const addAct = () => (dispatch) => {
  dispatch(dispatchResetProduct());
  dispatch(fetchAllActs());
};

export const deleteActsFromStorage = () => {
  deleteItem(constants.ACTS_INFO);
};
