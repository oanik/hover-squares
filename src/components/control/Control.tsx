import React from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';
import _isNil from 'lodash/isNil'

import { GameModeData } from '../../interfaces';
import DropdownSelection from '../dropdown';
import './Control.scss';

type ControlProps = {
  currentMode: number | null;
  gameModes: GameModeData[];
  onClick: () => void;
  onChangeMode: (mode: number) => void;

}

const Control: React.FC<ControlProps> = ({ currentMode, gameModes, onClick, onChangeMode }) => (
  <div className={classNames('flex', 'wrapper')}>
    <DropdownSelection gameModes={gameModes} onChangeMode={onChangeMode} />
    <Button
      primary
      disabled={_isNil(currentMode)}
      onClick={onClick}
      className="startButton"
    >
      START
    </Button>
  </div>
)

export default Control;