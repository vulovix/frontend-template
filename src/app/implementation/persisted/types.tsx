import { IPersistable } from '@service/types';

export interface IPersistedState extends IPersistable {
  loading: boolean;
  catImageUrl: string;
}

export type IPersistedActions = typeof import('./service').actions;
export type IPersistedSelectors = typeof import('./selectors');
