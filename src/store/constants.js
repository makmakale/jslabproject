export const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://jslab-cargo-transportation.herokuapp.com/api' : 'http://10.0.2.2:5000/api';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const SET_LOADER = 'SET_LOADER';
export const API = 'API';

//USER INFORMATION
export const USER_INFO = 'USER_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';
export const RESET_USER_INFO = 'RESET_USER_INFO';

//GEOLOCATION INFORMATION
export const START_WATCH_LOCATION = 'START_WATCH_LOCATION';
export const STOP_WATCH_LOCATION = 'STOP_WATCH_LOCATION';
export const ADD_LOCATION = 'ADD_LOCATION';
export const RESET_LOCATION = 'RESET_LOCATION';

//WAYBILLS INFORMATION
export const SET_ALL_WAYBILLS = 'SET_ALL_WAYBILLS';
export const WAYBILLS_INFO = 'WAYBILLS_INFO';
export const RESET_WAYBILLS = 'RESET_WAYBILLS';

//MAP
export const ROUTES_INFO = 'ROUTES_INFO';
export const SET_ROUTE_POINTS = 'SET_ROUTE_POINTS';
export const CHECK_ROUTE_POINT = 'CHECK_ROUTE_POINT';
export const RESET_ROUTES = 'RESET_ROUTES';

//GOODS
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RESET_PRODUCTS = 'RESET_PRODUCTS';

//ACTS
export const ACTS_INFO = 'ACTS_INFO';
export const SET_ACTS = 'SET_ACTS';
export const ADD_ACT = 'ADD_ACT';
