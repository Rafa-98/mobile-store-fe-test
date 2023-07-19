import { ADD_TO_PRODUCTS_LIST } from '../actions/productListAction';

const default_list = []

const productsList = (state = default_list, action) => {
    switch(action.type) {
        case ADD_TO_PRODUCTS_LIST: {
            return {
                ...state,
                products: action.payload
            }
        }
        default: return state;
    }
}

export default productsList;