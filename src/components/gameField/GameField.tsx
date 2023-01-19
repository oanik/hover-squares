import React, { useMemo } from 'react';

import { CellData } from '../../interfaces';
import { generateRows } from '../../utils';
import Cell from '../cell';
import './GameField.scss';

type GameFieldProps = {
  currentMode: number;
  isCellClear: boolean;
  onHover: (item: CellData) => void;
}

const GameField: React.FC<GameFieldProps> = ({ currentMode, isCellClear, onHover }) => {
  const rows = useMemo(() => generateRows(currentMode), [currentMode, isCellClear]);

  return (
    <React.Fragment>
      <table className="fieldContainer">
        <tbody>
          {rows.map(({ id, cells }) => {
            return (
              <tr key={id}>
                {cells.map((item) => (
                  <Cell
                    key={item.id}
                    isCellClear={isCellClear}
                    cellData={item}
                    onHover={onHover}
                  />)
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default GameField;
