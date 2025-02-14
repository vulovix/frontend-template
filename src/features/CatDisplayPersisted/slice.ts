import { createSlice } from '@reduxjs/toolkit';
import createPersistedSlice from 'libs/redux/createPersistedSlice';
import { PERSISTED_SCOPE } from './constants';
import { IPersistedState } from './types';

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
