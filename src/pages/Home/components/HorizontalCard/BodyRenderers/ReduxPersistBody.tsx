import { usePersistedActions, usePersistedSelectors } from 'features/persisted';
import { useDispatch, useSelector } from 'libs/slice';

export default function ReduxPersistBody(): JSX.Element {
  const dispatch = useDispatch();
  const actions = usePersistedActions();
  const selectors = usePersistedSelectors();
  const catImageUrl = useSelector(selectors.selectPersistedImageUrl);
  const catImageLoading = useSelector(selectors.selectPersistedImageLoading);
  // const isHydrated = useSelector(selectors.selectPersistedIsRehydrated);
  // console.log('catImageUrl', isHydrated);
  return (
    <>
      <h2>Redux Persist</h2>
      <p>
        We use Redux Persist to cache data to storage. When refreshed data will be loaded imidiately before running our
        App component.
      </p>
      <div>
        {catImageUrl && <img className="cat-image" src={catImageUrl} alt="Cat" />}
        <br />
        <button className="dispatch-button" onClick={() => dispatch(actions.getCatImage())}>
          {catImageLoading ? 'Loading' : 'Get Image'}
        </button>
        {catImageUrl && (
          <button className="dispatch-button delete-button" onClick={() => dispatch(actions.removeCatImageUrl())}>
            Remove
          </button>
        )}
      </div>
      <a href="https://redux-saga.js.org/docs/introduction/GettingStarted" target="_blank">
        View Docs
      </a>
    </>
  );
}
