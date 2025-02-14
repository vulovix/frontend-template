import { RootState } from 'libs/redux/store';
import { createSelector } from 'reselect';
import { PERSISTED_SCOPE } from './constants';
import { initialState } from './slice';
import { IPersistedState } from './types';

export const getPersistedState = (state: RootState): IPersistedState => state?.[PERSISTED_SCOPE] || initialState;

export const selectPersistedImageUrl = createSelector(getPersistedState, (state: IPersistedState) => state.catImageUrl);

export const selectPersistedImageLoading = createSelector(getPersistedState, (state: IPersistedState) => state.loading);

export const selectPersistedIsRehydrated = createSelector(getPersistedState, (state: IPersistedState) => state._persist?.rehydrated);
