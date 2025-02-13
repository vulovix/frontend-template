import { useRef } from 'react';

import { Container } from 'packages/ui';

import Hero from './components/Hero';
import HorizontalCard from './components/HorizontalCard';
import {
  ReactRouterBody,
  ReduxSagaBody,
  WebpackBody,
  IntlBody,
  ReduxPersistBody,
  ThemeBody,
} from './components/HorizontalCard/BodyRenderers';
import { WebpackIcon, ReactRouterIcon, ReduxSagaIcon, FormatJSIcon, ThemeIcon } from './icons';
import './style.scss';

export default function Page(): JSX.Element {
  const featuresRef = useRef(null);

  const handleLearnMoreClick = (): void => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container size="lg" direction="column" className="homepage-container">
      <Hero onLearnMoreClick={handleLearnMoreClick} />
      <Container size="lg" direction="column" className="features-container">
        <h2 ref={featuresRef} className="features-title">
          Features
        </h2>
        <HorizontalCard icon={WebpackIcon}>
          <WebpackBody />
        </HorizontalCard>
        <HorizontalCard icon={ReactRouterIcon}>
          <ReactRouterBody />
        </HorizontalCard>
        <HorizontalCard icon={ReduxSagaIcon}>
          <ReduxSagaBody />
        </HorizontalCard>
        <HorizontalCard icon={ReduxSagaIcon}>
          <ReduxPersistBody />
        </HorizontalCard>
        <HorizontalCard icon={FormatJSIcon}>
          <IntlBody />
        </HorizontalCard>
        <HorizontalCard icon={ThemeIcon}>
          <ThemeBody />
        </HorizontalCard>
      </Container>
    </Container>
  );
}
