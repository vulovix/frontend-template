/* eslint-disable no-restricted-imports */
import { configureStore, StoreEnhancer, Tuple } from '@reduxjs/toolkit';
import { compose } from 'redux';
import { createInjectorsEnhancer } from 'redux-injectors';
import { persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/es/storage';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './reducers';

export function configureAppStore(rootServices = {}, options: any) {
  const { blacklist = [] } = options;
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  const injectorsEnhancer = createInjectorsEnhancer({
    createReducer: (lazyInjectedServices) => createReducer(lazyInjectedServices)(rootServices),
    runSaga,
  });

  const composedEnhancers = compose(injectorsEnhancer as StoreEnhancer);

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist,
  };
  const persistableReducer = persistReducer(persistConfig, createReducer()(rootServices));

  const store = configureStore({
    reducer: persistableReducer,
    // middleware: (getDefaultMiddleware) => [
    //   ...getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    //   }),
    //   ...middlewares,
    // ],
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
      }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: (defaultEnhancers) => new Tuple(composedEnhancers, ...defaultEnhancers()),
  });

  const persistor = persistStore(store, null, () => {
    console.log('done rehydrate');
  });

  return { store, persistor };
}
