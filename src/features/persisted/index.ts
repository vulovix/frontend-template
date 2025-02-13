import { useSaga } from 'libs/saga';

import saga from './saga';
import * as selectors from './selectors';
import { actions } from './slice';
import { PERSISTED_SCOPE } from './settings';
import { IPersistedActions, IPersistedSelectors } from './types';

export const usePersistedImplementation = (): void => {
  useSaga({ key: PERSISTED_SCOPE, saga });
};

export const usePersistedActions = (): IPersistedActions => actions;
export const usePersistedSelectors = (): IPersistedSelectors => selectors;
