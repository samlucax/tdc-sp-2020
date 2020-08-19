import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    REMOVE_FROM_CART,
    UPDATE_AMOUNT_CART_REQUEST,
    UPDATE_AMOUNT_CART_SUCCESS
} from "../../../constants";

export function addToCart(id){
    return {
        type: ADD_TO_CART_REQUEST,
        id
    };
}

export function addToCartSuccess(product){
    return {
        type: ADD_TO_CART_SUCCESS,
        product
    };
}

export function removeFromCart(id){
    return {
        type: REMOVE_FROM_CART,
        id
    };
}

export function updateAmount(id, amount) {
    return {
        type: UPDATE_AMOUNT_CART_REQUEST,
        id,
        amount
    }
}

export function updateAmountSuccess(id, amount) {
    return {
        type: UPDATE_AMOUNT_CART_SUCCESS,
        id,
        amount
    }
}