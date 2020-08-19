import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from "./modules/reducers";
import sagas from './modules/sagas';

const isDevelopment = process.env.NODE_ENV === 'development';

const sagaMonitor = isDevelopment ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer = isDevelopment ?
    compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMiddleware)
    ) : applyMiddleware(sagaMiddleware);

const store = createStore(reducers, enhancer);

sagaMiddleware.run(sagas);

export default store;