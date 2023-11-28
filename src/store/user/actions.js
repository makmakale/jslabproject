import * as constants from '../constants';
import jwtDecode from 'jwt-decode';
import {deleteItem, getItem, setItem} from '../storage';

export const loginUser = (data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: 'POST',
    url: '/users/login',
    data,
    success: (res) => setUserInfo(res),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

export const setUserInfoFromStorage = (info) => {
  const userInfo = JSON.parse(info);
  if (!userInfo) {
    return;
  }
  const {exp} = jwtDecode(userInfo.token);
  if (!isExpired(exp)) {
    return {type: constants.SET_USER_INFO, payload: userInfo};
  }
  return updateToken();
};

const isExpired = (exp) => exp && exp > Date.now();

const updateToken = () => ({
  type: constants.API,
  payload: {
    method: 'POST',
    url: '/users/update-token',
    data: null,
    success: (res) => setUserInfo(res),
  },
});

const setUserInfo = (data) => {
  const {id, firstName, lastName} = jwtDecode(data.token);
  const userInfo = {
    userId: id,
    fullName: `${firstName} ${lastName}`,
    token: data.token,
    isLoggedIn: true,
  };
  setItem(constants.USER_INFO, JSON.stringify(userInfo)).then(() =>
    console.log('USER_INFO set to storage:\n', JSON.stringify(userInfo)),
  );

  return dispatchUserInfo(userInfo);
};

const dispatchUserInfo = (userInfo) => ({
  type: constants.SET_USER_INFO,
  payload: userInfo,
});

export const getUserFromStorage = () => (dispatch) => {
  getItem(constants.USER_INFO).then((user) => {
    const userInfo = JSON.parse(user);
    if (!!userInfo) {
      return dispatch(dispatchUserInfo(userInfo));
    }
  });
};

export const logoutUser = () => {
  deleteItem(constants.USER_INFO);
  return {type: constants.RESET_USER_INFO};
};

export const recoverPassword = () => {
  return true;
};
