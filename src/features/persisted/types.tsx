import { IPersistable } from 'libs/slice/types';

export interface IPersistedState extends IPersistable {
  loading: boolean;
  catImageUrl: string;
}

export type IPersistedActions = typeof import('./slice').actions;
export type IPersistedSelectors = typeof import('./selectors');
