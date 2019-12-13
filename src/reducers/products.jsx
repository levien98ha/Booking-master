import * as Types from '../constants/ActionType'

const initState = [];

const products = (state = initState, action) =>{
    switch (action.type){
        case Types.SHOW_LIST_ROOM: 
           state = action.products
           return [...state];
        default: return [...state]
    }
}

export default products;