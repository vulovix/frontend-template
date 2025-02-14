import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from 'routes/Home';
import AboutPage from 'routes/About';
import { Container } from '@mantine/core';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import './style';

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
