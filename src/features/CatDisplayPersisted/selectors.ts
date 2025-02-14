import { initialState } from './slice';
import { PERSISTED_SCOPE } from './constants';
import { IPersistedState } from './types';
import { createSelector } from 'reselect';
import { RootState } from 'libs/redux/store';

export const getPersistedState = (state: RootState): IPersistedState => state?.[PERSISTED_SCOPE] || initialState;

export const selectPersistedImageUrl = createSelector(getPersistedState, (state: IPersistedState) => state.catImageUrl);

export const selectPersistedImageLoading = createSelector(getPersistedState, (state: IPersistedState) => state.loading);

export const selectPersistedIsRehydrated = createSelector(
  getPersistedState,
  (state: IPersistedState) => state._persist?.rehydrated,
);
