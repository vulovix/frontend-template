import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import AboutPage from 'routes/About';
import HomePage from 'routes/Home';

import './style.scss';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Container } from '@mantine/core';

const Loading = (): JSX.Element => <span>Loading...</span>;

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Container>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
      <Footer />
    </Suspense>
  );
};
export default App;
