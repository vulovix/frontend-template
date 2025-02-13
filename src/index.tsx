import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@providers/Theme';
import { ReduxProvider } from '@service';
import { IntlProvider, defaultLocale, translationMessages } from '@translations';
import setupStore from 'core/service/setupStore';

import App from './app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

const { store, persistor } = setupStore;

root.render(
  <ReduxProvider store={store}>
    <PersistGate loading={<></>} persistor={persistor}>
      <IntlProvider locale={defaultLocale} defaultLocale={defaultLocale} messages={translationMessages}>
        <BrowserRouter>
          <StrictMode>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </StrictMode>
        </BrowserRouter>
      </IntlProvider>
    </PersistGate>
  </ReduxProvider>,
);
