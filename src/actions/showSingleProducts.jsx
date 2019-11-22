import {ActionTypes} from '../constants/ActionType';

export const showSingleProduct = (singleProduct) =>{
    return {
      type: ActionTypes.SHOW_SINGLE_PRODUCT,
      singleProduct
    };
  };