import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import classNames from 'classnames';
import _isNil from 'lodash/isNil';

import { CellData, GameModeData } from '../../interfaces';
import GameStartContext, { initialGameStartState } from '../../context/gameStartContext/GameStartContext';
import { Control, GameField, HoverLog } from '../../components';
import './GameApp.scss';

type GameAppProps = {
  gameModes: GameModeData[];
}

const GameApp: React.FC<GameAppProps> = ({ gameModes }) => {
  const [cells, setCells] = React.useState<CellData[]>([]);
  const [currentMode, setCurrentMode] = useState<number | null>(null);
  const [start, setStart] = useState<boolean>(initialGameStartState.start);
  const [isCellClear, setCellClear] = React.useState<boolean>(false);

  const onHover = (item: CellData) => {
    if (isCellClear) {
      setCellClear(false);
    }

    const hoveredCell = cells.find((cell) => cell.id === item.id);
    const newCellsArray = hoveredCell
      ? cells.filter(cell => cell.id !== item.id)
      : cells.concat(item);

    setCells(newCellsArray);
  }

  const handleChange = (mode: number): void => {
    setCellClear(true);
    setStart(false);
    setCurrentMode(mode);
  }

  const handleStart = (): void => {
    setCellClear(true);
    setStart(true);
  }

  useEffect(() => {
    setCells([]);
  }, [start, gameModes, isCellClear]);

  return (
    <GameStartContext.Provider value={{ start }} >
      <Grid className={classNames('viewHeight', 'itemsCenter', 'grid')} columns={2} divided>

        <Grid.Column className="gridColumn" verticalAlign="top">
          <Grid.Row className={classNames('flex', 'justifyCenter')}>
            <Control
              currentMode={currentMode}
              gameModes={gameModes}
              onChangeMode={handleChange}
              onClick={handleStart}
            />
          </Grid.Row>
          {!_isNil(currentMode) &&
            <GameField
              currentMode={currentMode}
              isCellClear={isCellClear}
              onHover={onHover}
            />
          }
        </Grid.Column>

        <Grid.Column className="gridColumn">
          <HoverLog cellLogs={cells} />
        </Grid.Column>
      </Grid>
    </GameStartContext.Provider>
  )
}

export default GameApp;
