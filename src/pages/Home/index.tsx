import { useCatImplementation } from 'features/cat';
import { usePersistedImplementation } from 'features/persisted';

import Page from './page';
import './style.scss';

export default function HomePage(): JSX.Element {
  useCatImplementation();
  usePersistedImplementation();
  return <Page />;
}
