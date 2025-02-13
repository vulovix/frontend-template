import { CATCONTROLLER_SCOPE } from 'features/cat/constants';
import { ICatState } from 'features/cat/types';
import { PERSISTED_SCOPE } from 'features/persisted/settings';
import { IPersistedState } from 'features/persisted/types';
import { THEME_SCOPE } from 'providers/Theme/slice/constants';
import { IThemeState } from 'providers/Theme/slice/types';

export interface IRootState {
  [THEME_SCOPE]: IThemeState;
  [PERSISTED_SCOPE]: IPersistedState;
  // controllers
  [CATCONTROLLER_SCOPE]: ICatState;
}
