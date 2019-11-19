import ActionTypes from '../constants/ActionType'

export function showSingleProduct(singleProduct) {
    return {
      type: ActionTypes.SHOW_SINGLE_PRODUCT,
      singleProduct
    };
  };