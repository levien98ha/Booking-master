import {ActionTypes} from '../constants/ActionType';

export const bookingRooms = (dataBookking) => {
    return {
      type: ActionTypes.BOOKING_ROOM,
      dataBookking
    };
  };