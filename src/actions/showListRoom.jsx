import {ActionTypes} from '../constants/ActionType';

export const showListRoom = (products) => {
    return {
      type: ActionTypes.BOOKING_ROOM,
      products
    };
  };