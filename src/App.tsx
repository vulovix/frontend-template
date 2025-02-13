import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/Header';
import AboutPage from 'pages/About';
import HomePage from 'pages/Home';

import './style.scss';

const Loading = (): JSX.Element => <span>Loading...</span>;

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Header />
        <main id="main">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Suspense>
  );
};
export default App;
