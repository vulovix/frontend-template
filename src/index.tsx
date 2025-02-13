import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ReduxProvider } from 'libs/slice';
import { IntlProvider, defaultLocale, translationMessages } from 'libs/translations';
import setupStore from 'libs/slice/setupStore';

import App from './App';
import { MantineThemeProvider } from 'providers/MantineTheme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

const { store, persistor } = setupStore;

root.render(
  <ReduxProvider store={store}>
    <PersistGate loading={<></>} persistor={persistor}>
      <IntlProvider locale={defaultLocale} defaultLocale={defaultLocale} messages={translationMessages}>
        <BrowserRouter>
          <StrictMode>
            <MantineThemeProvider>
              <App />
            </MantineThemeProvider>
          </StrictMode>
        </BrowserRouter>
      </IntlProvider>
    </PersistGate>
  </ReduxProvider>,
);
