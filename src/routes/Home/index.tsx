import { Container } from '@mantine/core';
import { Features } from 'components/Features/Features';
import { Hero } from 'components/Hero/Hero';
import { JSX } from 'react';
import './style';

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
