import React from 'react';

import { GameModeData } from '../../interfaces';
import { STATUS } from '../../constants/enums';
import GameApp from '../gameApp';
import Loader from '../loader';
import ErrorState from '../error';

interface StateWrapperProps {
  status: STATUS;
  gameModes: GameModeData[];
}

export const StateWrapper: React.FC<StateWrapperProps> = ({ status, gameModes }) => {
  const renderComponent = (): React.ReactElement => {
    switch (status) {
      case STATUS.SUCCESS: {
        return <GameApp gameModes={gameModes} />
      }
      case STATUS.LOADING: {
        return <Loader />
      }
      default: {
        return <ErrorState />
      }
    }
  };

  return renderComponent();
};
