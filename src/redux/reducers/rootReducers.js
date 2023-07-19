import { combineReducers } from 'redux';
import cart from './cartReducer';
import productsList from './productListReducer';

const rootReducers = combineReducers({
    cart,
    productsList
});

export default rootReducers;