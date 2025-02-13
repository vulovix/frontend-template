import { useRepository } from '@repository';
import { useService } from '@service';

import repository from './repository';
import * as selectors from './selectors';
import { service, actions } from './service';
import { CATCONTROLLER_SCOPE } from './settings';
import { ICatActions, ICatSelectors } from './types';

export const useCatImplementation = (): void => {
  useService({ key: CATCONTROLLER_SCOPE, service });
  useRepository({ key: CATCONTROLLER_SCOPE, repository });
};

export const useCatActions = (): ICatActions => {
  return actions;
};

export const useCatSelectors = (): ICatSelectors => {
  return selectors;
};
