import React, { useContext, useState } from 'react';
import classNames from 'classnames';

import GameStartContext from '../../context/gameStartContext/GameStartContext';
import { CellData } from '../../interfaces';
import './Cell.scss';

type CellProps = {
  cellData: CellData;
  isCellClear: boolean;
  onHover: (item: CellData) => void
}
const Cell: React.FC<CellProps> = ({
  onHover,
  cellData,
  isCellClear
}) => {
  const isStart = useContext(GameStartContext);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const isCellColored = isHovered && !isCellClear;

  const handleHover = (): void => {
    if (isStart) {
      setIsHovered(!isHovered);
      onHover(cellData);
    }
  };

  return (
    <td
      className={classNames('cell', { 'hoveredCell': isCellColored })}
      onMouseEnter={handleHover}
    />
  )
}

export default Cell;
