import { Features } from 'components/Features/Features';
import { Hero } from 'components/Hero/Hero';
import { Container } from '@mantine/core';
import { JSX } from 'react';
import './style.scss';
import { useInjectSaga } from 'redux-injectors';
import { CATCONTROLLER_SCOPE } from 'features/CatDisplay/constants';
import catSaga from 'features/CatDisplay/saga';

export default function Page(): JSX.Element {
  return (
    <Container size="lg" className="homepage-container">
      <Hero />
      <Container size="lg" className="features-container">
        <Features />
      </Container>
    </Container>
  );
}
