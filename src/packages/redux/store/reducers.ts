/* eslint-disable no-restricted-imports */
/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export const createReducer =
  (lazyInjectedServices = {}) =>
  (rootServices = {}) => {
    if (Object.keys(lazyInjectedServices).length === 0 && Object.keys(rootServices).length === 0) {
      return (state: any) => state;
    } else {
      return combineReducers({
        ...lazyInjectedServices,
        ...rootServices,
      });
    }
  };
