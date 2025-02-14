import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { RootState } from './store';

const createPersistedSlice = (key: RootState, reducer: any, options?: any) => {
  const { version = 1, stringify = true, debug = true } = options || {};

  return persistReducer(
    {
      key,
      storage,
      version,
      serialize: stringify,
      debug,
    },
    reducer,
  );
};

export default createPersistedSlice;
