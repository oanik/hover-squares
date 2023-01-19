import React from 'react';
import classNames from 'classnames';
import { Loader } from 'semantic-ui-react';

const LoaderCentered = () => (
  <div className={classNames('viewHeight', 'flex', 'itemsCenter')}>
    <Loader size="large" active inline='centered' />
  </div>
)

export default LoaderCentered;
