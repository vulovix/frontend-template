import persistService from '@implementation/persisted/service';
import { PERSISTED_SCOPE } from '@implementation/persisted/settings';
import { configureAppStore } from '@service';

const rootServices = {
  [PERSISTED_SCOPE]: persistService,
};

const store = configureAppStore(rootServices, {
  blacklist: Object.keys(rootServices),
});

export default store;
