import { FormattedMessage, useLanguageProvider } from 'libs/translations';

export default function IntlBody(): JSX.Element {
  const { locale, changeLocale } = useLanguageProvider();

  return (
    <>
      <h2>
        <FormattedMessage id="homepage.features.intl.title" />
      </h2>
      <p>
        <FormattedMessage id="homepage.features.intl.description" />
      </p>

      <div className="button-group">
        <button className="dispatch-button" onClick={() => changeLocale(locale === 'en' ? 'de' : 'en')}>
          <FormattedMessage id="homepage.features.intl.localeButton" />
        </button>
        <a href="https://formatjs.io/docs/getting-started/installation/" target="_blank">
          <FormattedMessage id="homepage.features.intl.docsButton" />
        </a>
      </div>
    </>
  );
}
