import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from "react-toastify";

import api from "../../../services/api";
import { formatPrice } from "../../../util/format";

import {addToCartSuccess, updateAmountSuccess} from "./actions";
import {ADD_TO_CART_REQUEST, UPDATE_AMOUNT_CART_REQUEST} from "../../../constants";
import history from "../../../services/history";

function* addToCart({ id }) {
    const product = yield select(state => state.cart.find(p => p.id === id));

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
    const currentAmount = product ? product.amount : 0;

    const amount = currentAmount + 1;
    if(amount > stockAmount){
        toast.error('Quantidade solicitada fora de estoque');
        return;
    }

    toast.success('Produto adicionado com sucesso.')

    if(product){
        yield put(updateAmountSuccess(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price)
        }

        yield put(addToCartSuccess(data));
        history.push('/cart');
    }

}

function* updateAmount({id, amount}){
    if(amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if(amount > stockAmount){
        toast.error('Quantidade solicitada fora de estoque');
        return;
    }
    
    toast.success('Produto adicionado com sucesso.')

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest(ADD_TO_CART_REQUEST, addToCart),
    takeLatest(UPDATE_AMOUNT_CART_REQUEST, updateAmount)
]);