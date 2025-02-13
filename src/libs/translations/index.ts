/* eslint-disable no-restricted-imports */
import { formatTranslationMessages } from 'packages/intl';

import de from './de/translation.json';
import en from './en/translation.json';

export const defaultLocale = 'en';

export const translationMessages = {
  en: formatTranslationMessages('en', en),
  de: formatTranslationMessages('de', de),
};

export * from 'packages/intl';
