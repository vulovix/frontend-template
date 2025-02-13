import { useCatImplementation } from '@implementation/cat';
import { usePersistedImplementation } from '@implementation/persisted';

import Page from './page';
import './style.scss';

export default function HomePage(): JSX.Element {
  useCatImplementation();
  usePersistedImplementation();
  return <Page />;
}
