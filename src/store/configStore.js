import {compose, applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {apiMiddleware} from './apiMiddleware';
import rootReducer from './index';
import {StorageOptions} from './storage';

const persistConfig = {
  key: 'root',
  storage: createSensitiveStorage(StorageOptions),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(thunkMiddleware, createLogger(), apiMiddleware)),
);
export const persistor = persistStore(store);
persistor.purge();
