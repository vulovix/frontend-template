import { IRootState, createSelector } from '@service';

import { initialState } from './service';
import { CATCONTROLLER_SCOPE } from './settings';
import { ICatState } from './types';

export const getCatState = (state: IRootState): ICatState => state?.[CATCONTROLLER_SCOPE] || initialState;

export const selectCatImageUrl = createSelector(getCatState, (state: ICatState) => state.catImageUrl);

export const selectCatImageLoading = createSelector(getCatState, (state: ICatState) => state.loading);
