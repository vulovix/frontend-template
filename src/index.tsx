import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { IntlProvider, defaultLocale, translationMessages } from 'libs/translations';
import store, { persistor } from 'libs/redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import { MantineThemeProvider } from 'providers/MantineTheme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

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
