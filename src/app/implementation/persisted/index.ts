import { useRepository } from '@repository';

import repository from './repository';
import * as selectors from './selectors';
import { actions } from './service';
import { PERSISTED_SCOPE } from './settings';
import { IPersistedActions, IPersistedSelectors } from './types';

export const usePersistedImplementation = (): void => {
  useRepository({ key: PERSISTED_SCOPE, repository });
};

export const usePersistedActions = (): IPersistedActions => actions;
export const usePersistedSelectors = (): IPersistedSelectors => selectors;
