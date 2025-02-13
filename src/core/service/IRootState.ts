import { CATCONTROLLER_SCOPE } from '@implementation/cat/settings';
import { ICatState } from '@implementation/cat/types';
import { PERSISTED_SCOPE } from '@implementation/persisted/settings';
import { IPersistedState } from '@implementation/persisted/types';
import { THEME_SCOPE } from '@providers/Theme/slice/constants';
import { IThemeState } from '@providers/Theme/slice/types';

export interface IRootState {
  [THEME_SCOPE]: IThemeState;
  [PERSISTED_SCOPE]: IPersistedState;
  // controllers
  [CATCONTROLLER_SCOPE]: ICatState;
}
