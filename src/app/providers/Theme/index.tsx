import * as React from 'react';

import { useThemeProvider } from './slice';
import { useDetectTheme } from './useDetectTheme';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeProvider();
  const { preferedTheme } = useDetectTheme();
  React.useEffect(() => {
    document.documentElement.setAttribute('theme', preferedTheme);
  }, [preferedTheme]);
  return <>{React.Children.only(props.children)}</>;
};
