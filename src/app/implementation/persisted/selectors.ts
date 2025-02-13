import { IRootState, createSelector } from '@service';

import { initialState } from './service';
import { PERSISTED_SCOPE } from './settings';
import { IPersistedState } from './types';

export const getPersistedState = (state: IRootState): IPersistedState => state?.[PERSISTED_SCOPE] || initialState;

export const selectPersistedImageUrl = createSelector(getPersistedState, (state: IPersistedState) => state.catImageUrl);

export const selectPersistedImageLoading = createSelector(getPersistedState, (state: IPersistedState) => state.loading);

export const selectPersistedIsRehydrated = createSelector(
  getPersistedState,
  (state: IPersistedState) => state._persist?.rehydrated,
);
