import classNames from 'classnames';
import React from 'react';

import { CellData } from '../../interfaces';
import './HoverLog.scss'

type HoverLogProps = {
  cellLogs: CellData[];
}

const HoverLog: React.FC<HoverLogProps> = ({ cellLogs }) => (
  <div className={classNames('flex', 'flexCol', 'itemsCenter', 'logContainer')}>
    <div className="header">Hover squares</div>
    <ul className="rowContainer">
      {cellLogs.map(({ id, rowNumber, cellNumber }) => (
        <li key={id} className="logRow">
          row {rowNumber} col {cellNumber}
        </li>)
      )}
    </ul>
  </div>
)

export default HoverLog;
