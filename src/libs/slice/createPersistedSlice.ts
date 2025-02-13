import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'packages/redux';

import { TRootStateKeyType } from './types';

const createPersistedSlice = (key: TRootStateKeyType, reducer: any, options?: any) => {
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
