import { createService } from '@service';
import createPersistedService from 'core/service/createPersistedService';

import { PERSISTED_SCOPE } from './settings';
import { IPersistedState } from './types';

export const initialState: IPersistedState = {
  loading: false,
  catImageUrl: '',
};

const _service = createService({
  name: PERSISTED_SCOPE,
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

export const { actions } = _service;

export default createPersistedService(PERSISTED_SCOPE, _service.service);
