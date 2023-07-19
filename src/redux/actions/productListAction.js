export const ADD_TO_PRODUCTS_LIST = 'ADD_TO_PRODUCTS_LIST';

export const add_to_list = (products) => {
    return {
        type: ADD_TO_PRODUCTS_LIST,
        payload: products
    }
}