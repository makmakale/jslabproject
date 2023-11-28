import axios from 'axios';
import * as constants from './constants';
import {logoutUser} from './user/actions';
import {loaderOff, loaderOn} from './loader/actions';

export const apiMiddleware = ({dispatch, getState}) => (next) => (action) => {
  if (action.type !== constants.API) {
    return next(action);
  }

  dispatch(loaderOn());
  const BASE_URL = constants.BASE_URL;
  const AUTH_TOKEN = getState().user.token;
  if (AUTH_TOKEN) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
  }
  const {
    url,
    method,
    success,
    data,
    postProcessSuccess,
    postProcessError,
  } = action.payload;

  axios({
    method,
    url: BASE_URL + url,
    data: data ? data : null,
  })
    .then((response) => {
      dispatch(loaderOff());
      if (success) {
        dispatch(success(response.data));
      }
      if (postProcessSuccess) {
        postProcessSuccess(response.data);
      }
    })
    .catch((err) => {
      dispatch(loaderOff());
      if (!err.response) {
        console.warn(err);
      } else {
        if (err.response && err.response.status === 403) {
          dispatch(logoutUser());
        }
        if (err.response.data.error.message) {
          if (postProcessError) {
            postProcessError(err.response.data.error.message);
          }
        }
      }
    });
};
