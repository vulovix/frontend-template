import { NavLink } from 'react-router-dom';

import { Container } from '@reactoso-ui';

import './style.scss';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <Container size="lg">
        <h2>
          <NavLink to="/">Reactoso</NavLink>
        </h2>
        <div className="nav-items">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </Container>
    </header>
  );
}
