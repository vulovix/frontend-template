import { IRootState, createSelector } from 'libs/slice';

import { initialState } from './slice';
import { CATCONTROLLER_SCOPE } from './constants';
import { ICatState } from './types';

export const getCatState = (state: IRootState): ICatState => state?.[CATCONTROLLER_SCOPE] || initialState;

export const selectCatImageUrl = createSelector(getCatState, (state: ICatState) => state.catImageUrl);

export const selectCatImageLoading = createSelector(getCatState, (state: ICatState) => state.loading);
