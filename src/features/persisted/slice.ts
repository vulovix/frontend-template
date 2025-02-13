import createPersistedSlice from 'libs/slice/createPersistedSlice';

import { PERSISTED_SCOPE } from './settings';
import { IPersistedState } from './types';
import { createSlice } from 'packages/redux';

export const initialState: IPersistedState = {
  loading: false,
  catImageUrl: '',
};

const slice = createSlice({
  name: PERSISTED_SCOPE,
  initialState,
  reducers: {
    getCatImage(state) {
      state.loading = true;
      state.catImageUrl = '';
    },
    setCatImageUrl(state, action) {
      state.loading = false;
      state.catImageUrl = action.payload;
    },
    removeCatImageUrl(state) {
      state.catImageUrl = '';
    },
  },
});

export const { actions } = slice;

export default createPersistedSlice(PERSISTED_SCOPE, slice.reducer);
