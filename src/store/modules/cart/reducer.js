import produce from 'immer';

import {
    ADD_TO_CART,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    REMOVE_FROM_CART,
    UPDATE_AMOUNT_CART_SUCCESS
} from "../../../constants";

export default function cart (state = [], action) {
    switch (action.type) {
        case ADD_TO_CART_SUCCESS:
            return produce(state, draft => {
                draft.push(action.product);
            });
        case REMOVE_FROM_CART:
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);
                if(productIndex >= 0){
                    draft.splice(productIndex, 1);
                }
            });
        case UPDATE_AMOUNT_CART_SUCCESS:
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if(productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        default:
            return state;
    }
}