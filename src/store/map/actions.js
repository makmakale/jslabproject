import * as constants from '../constants';
import {addressToCoords} from 'services/map';
import {deleteItem, getItem, setItem} from '../storage';
import axios from 'axios';
import stringToDate from 'services/date';
import {fetchAllWaybills} from '../waybill/actions';

export const setRoutePoints = (waybill) => async (dispatch) => {
  if (!waybill) {
    return;
  }

  let points = [];
  let id = 1;
  points.push({
    id: id++,
    waybillId: waybill.id,
    title: waybill.consignment_note.client.companyName || waybill.consignment_note.client.shortFullName,
    description: waybill.consignment_note.client.fullAddress,
    location: await addressToCoords(waybill.consignment_note.client.fullAddress),
    isChecked: !!waybill.control_points.length &&
      !!waybill.control_points.find((item) => item.controlPointStatusId === 2),
  });

  let others = [];
  if (!!waybill.control_points.length) {
    others = await Promise.all(
      waybill.control_points
        .sort((a, b) => a.expectedArrivalAt.localeCompare(b.expectedArrivalAt))
        .map(async (item) => {
          return {
            id: item.id,
            title: item.name,
            location: await addressToCoords(item.name),
            expectDate: stringToDate(item.expectedArrivalAt),
            isChecked: item.controlPointStatusId === 2,
          };
        }),
    );
  }

  if (!!others.length) {
    points = points.concat(others);
  }

  points.push({
    id: id,
    title: waybill.warehouse.name,
    description: waybill.warehouse.fullAddress,
    location: await addressToCoords(waybill.warehouse.fullAddress),
    isChecked: waybill.waybillStatusId === 2,
  });

  return dispatch(setMapPoints(points));
};

const setMapPoints = (points) => (dispatch) => {
  setItem(constants.ROUTES_INFO, JSON.stringify(points)).then(() =>
    console.log('SET_ROUTES_INFO set to storage:\n', JSON.stringify(points)),
  );

  return dispatch(dispatchPoints(points));
};

export const getMapRoutesFromStorage = () => (dispatch) => {
  getItem(constants.ROUTES_INFO).then((list) => {
    const points = JSON.parse(list);
    if (!!points && !!points.length) {
      return dispatch(dispatchPoints(points));
    }
  });
};

export const dispatchPoints = (points) => ({
  type: constants.SET_ROUTE_POINTS,
  payload: points,
});

export const checkPoint = (id) => (dispatch) => {
  axios.put(`${constants.BASE_URL}/waybills/mobile/checkPoint/${id}`)
    .then(() => dispatch({type: constants.CHECK_ROUTE_POINT, id}))
    .catch(() => dispatch({type: constants.CHECK_ROUTE_POINT, id}));

  return dispatch(fetchAllWaybills());
};

export const resetMap = () => (dispatch) => {
  deleteItem(constants.ROUTES_INFO).then(() =>
    console.info('ROUTES_INFO removed from storage'),
  );
  dispatch({
    type: constants.RESET_ROUTES,
  });
};
