import {combinReducers} from 'react-redux';
import cart from './cart';
const rootReducer = combinReducers({
    cart
});
export default rootReducer;