import React, { useState, useEffect } from 'react';

import { GameModeData } from './interfaces';
import { getGameModeData } from './api/index';
import { STATUS } from './constants/enums';
import StateWrapper from './layout/stateWrapper';

const App = () => {
  const [gameModes, setGameModes] = useState<GameModeData[]>([]);
  const [status, setStatus] = useState<STATUS>(STATUS.LOADING);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getGameModeData();

        setGameModes(response);
        setStatus(STATUS.SUCCESS);
      } catch (e) {
        setStatus(STATUS.ERROR);
      }
    };

    getData();
  }, []);

  return <StateWrapper status={status} gameModes={gameModes} />
}

export default App;
