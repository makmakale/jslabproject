import * as constants from '../constants';

export const dispatchAddProduct = (product) => ({
  type: constants.ADD_PRODUCT,
  payload: product,
});

export const dispatchUpdateProduct = (id, data) => ({
  type: constants.UPDATE_PRODUCT,
  payload: {
    id,
    data,
  },
});

export const dispatchRemoveProduct = (id) => ({
  type: constants.REMOVE_PRODUCT,
  payload: id,
});

export const dispatchResetProduct = () => ({
  type: constants.RESET_PRODUCTS,
});
