import React from 'react';
import classNames from 'classnames';
import { Header, Icon, Segment } from 'semantic-ui-react';

const ErrorState = () => (
  <div className={classNames('viewHeight', 'flex', 'itemsCenter', 'justifyCenter')}>
    <Segment textAlign="center">
      <Header icon>
        <Icon name='warning sign' />
        Oops! Something went wrong ...
        </Header>
    </Segment>
  </div>
);

export default ErrorState;
