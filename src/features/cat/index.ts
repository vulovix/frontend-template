import { useSaga } from 'libs/saga';
import { useReducer } from 'libs/slice';

import saga from './saga';
import * as selectors from './selectors';
import { reducer, actions } from './slice';
import { CATCONTROLLER_SCOPE } from './constants';
import { ICatActions, ICatSelectors } from './types';

export const useCatImplementation = (): void => {
  useReducer({ key: CATCONTROLLER_SCOPE, reducer });
  useSaga({ key: CATCONTROLLER_SCOPE, saga });
};

export const useCatActions = (): ICatActions => {
  return actions;
};

export const useCatSelectors = (): ICatSelectors => {
  return selectors;
};
