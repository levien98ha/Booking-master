
import { showSingleProduct } from '../actions';
import { bookingRooms } from '../actions';
import * as Types from '../constants/ActionType'
import { showListRoom } from '../actions/showListRoom';

const initState = {
    products: [ ] }
    
function rootReducer(state = initState, action){
    switch (action.type) {
        case showSingleProduct: {
            return [...state];
        }
        case bookingRooms:{
            return [...state];
        }
        case showListRoom:{
            state = action.products
            return [...state]
        }
        default: return state
    }
}
export default rootReducer;