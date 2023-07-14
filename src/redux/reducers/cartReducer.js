import { ADD_TO_CART } from '../actions/cartAction';

const default_cart = {
    quantity: 0
}

const cart = (state = default_cart, action) => {
    switch(action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                quantity: action.payload
            }
        }
        default: return state;
    }
}

export default cart;