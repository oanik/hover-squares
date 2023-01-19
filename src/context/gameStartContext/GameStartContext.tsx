import React from 'react';

export const initialGameStartState = {
  start: false
};

const GameStartContext = React.createContext(initialGameStartState);

export default GameStartContext;