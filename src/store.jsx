import { createStore} from 'react-redux';
import rootReducer from './reducers';
export default(initialState) => {
    return createStore(rootReducer, initialState);
}