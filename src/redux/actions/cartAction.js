export const ADD_TO_CART = 'ADD_TO_CART';

export const add_to_cart = (quantity) => {
    return {
        type: ADD_TO_CART,
        payload: quantity
    }
}