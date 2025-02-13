import { createService } from '@service';

import { CATCONTROLLER_SCOPE } from './settings';
import { ICatState } from './types';

export const initialState: ICatState = {
  loading: false,
  catImageUrl: '',
};

const _service = createService({
  name: CATCONTROLLER_SCOPE,
  initialState,
  actions: {
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

export const { actions, service } = _service;
