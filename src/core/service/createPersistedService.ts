import storage from 'redux-persist/lib/storage';

// eslint-disable-next-line no-restricted-imports
import { persistService } from '@reactoso-redux';

import { TRootStateKeyType } from './types';

const createPersistedService = (key: TRootStateKeyType, service: any, options?: any) => {
  const { version = 1, stringify = true, debug = true } = options || {};

  return persistService(
    {
      key,
      storage,
      version,
      serialize: stringify,
      debug,
    },
    service,
  );
};

export default createPersistedService;