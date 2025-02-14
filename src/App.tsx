import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Container } from '@mantine/core';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import AboutPage from 'routes/About';
import HomePage from 'routes/Home';
import './style.scss';

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
