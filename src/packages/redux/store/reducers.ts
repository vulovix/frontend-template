/** Combine all reducers in this file and export the combined reducers. */

import { combineReducers } from '@reduxjs/toolkit';

/** Merges the main reducer with the router state and dynamically injected reducers */

export const createReducer =
  (lazyInjectedReducers = {}) =>
  (rootReducers = {}) => {
    if (Object.keys(lazyInjectedReducers).length === 0 && Object.keys(rootReducers).length === 0) {
      return (state: any) => state;
    } else {
      return combineReducers({
        ...lazyInjectedReducers,
        ...rootReducers,
      });
    }
  };
