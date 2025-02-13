import { IHeroProps } from 'pages/Home/types';
import './style.scss';

export default function Hero(props: IHeroProps): JSX.Element {
  return (
    <div className="hero-section">
      <h1 className="hero-title">Welcome to Reactoso!</h1>
      <div className="flex">
        <div className="separator" />
        <p className="hero-description">
          The simplest way to create a new React application. Focused on developer experience, simplicity, and
          performance.
        </p>
        <div className="separator" />
      </div>
      <div className="button-group">
        <button onClick={props.onLearnMoreClick} className="primary-button">
          Learn More
        </button>
        <a href="https://github.com/vulovix/reactoso" target="_blank" className="secondary-button">
          View on GitHub
        </a>
      </div>
    </div>
  );
}
