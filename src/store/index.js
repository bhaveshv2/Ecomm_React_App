import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers/index.js';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:'products',
    storage:storage,
    whitelist:['products']
}

const persReducer = persistReducer(persistConfig,reducer);

const store = createStore(persReducer,applyMiddleware(thunk,logger));

const persistor = persistStore(store);

export { persistor,store }; 