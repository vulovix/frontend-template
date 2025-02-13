import { IHorizontalCardProps } from '@pages/Home/types';
import { Card } from '@reactoso-ui';

import './style.scss';

export default function HorizontalCard(props: IHorizontalCardProps): JSX.Element {
  const { icon: Icon } = props;
  return (
    <Card className="feature-item">
      <Icon />
      <div className="feature-item-content">{props.children}</div>
    </Card>
  );
}
