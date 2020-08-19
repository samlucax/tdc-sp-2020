import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* sagas() {
    return yield all([
        cart
    ]);
}