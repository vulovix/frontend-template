import { initialState } from './slice';
import { CATCONTROLLER_SCOPE } from './constants';
import { ICatState } from './types';
import { createSelector } from 'reselect';
import { RootState } from 'libs/redux/store';

export const getCatState = (state: RootState): ICatState => state?.[CATCONTROLLER_SCOPE] || initialState;

export const selectCatImageUrl = createSelector(getCatState, (state: ICatState) => state.catImageUrl);

export const selectCatImageLoading = createSelector(getCatState, (state: ICatState) => state.loading);
