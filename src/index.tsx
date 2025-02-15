import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from 'libs/redux/store';
import { defaultLocale, translationMessages } from 'libs/translations';
import { LanguageProvider } from 'providers/Language/LanguageProvider';
import { MantineThemeProvider } from 'providers/MantineTheme';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <ReduxProvider store={store}>
    <PersistGate loading={<></>} persistor={persistor}>
      <LanguageProvider locale={defaultLocale} defaultLocale={defaultLocale} messages={translationMessages}>
        <BrowserRouter>
          <StrictMode>
            <MantineThemeProvider>
              <App />
            </MantineThemeProvider>
          </StrictMode>
        </BrowserRouter>
      </LanguageProvider>
    </PersistGate>
  </ReduxProvider>,
);
