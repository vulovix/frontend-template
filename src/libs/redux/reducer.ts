import persistedSlice from 'features/CatDisplayPersisted/slice';

import { PERSISTED_SCOPE } from 'features/CatDisplayPersisted/constants';

const rootReducer = {
  //
  [PERSISTED_SCOPE]: persistedSlice,
};

export default rootReducer;
