import {combineReducers} from 'redux';
import loadingReducer from './loader/reducer';
import userReducer from './user/reducer';
import mapReducer from './map/reducer';
import geoLocationReducer from './geoLoc/reducer';
import wayBillsReducer from './waybill/reducer';
import actsReducer from './acts/reducer';
import goodsReducer from './goods/reducer';

export default combineReducers({
  loading: loadingReducer,
  user: userReducer,
  map: mapReducer,
  geoLoc: geoLocationReducer,
  wayBills: wayBillsReducer,
  acts: actsReducer,
  goods: goodsReducer,
});
