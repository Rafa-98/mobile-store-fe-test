import { combineReducers } from 'redux';
import cart from './cartReducer';

const rootReducers = combineReducers({
    cart
});

export default rootReducers;