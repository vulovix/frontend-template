export interface ICatState {
  loading: boolean;
  catImageUrl: string;
}

export type ICatActions = typeof import('./service').actions;
export type ICatSelectors = typeof import('./selectors');
