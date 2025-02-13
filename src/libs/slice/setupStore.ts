import persistService from 'features/persisted/slice';
import { PERSISTED_SCOPE } from 'features/persisted/settings';
import { configureAppStore } from 'libs/slice';

const rootServices = {
  [PERSISTED_SCOPE]: persistService,
};

const store = configureAppStore(rootServices, {
  blacklist: Object.keys(rootServices),
});

export default store;
