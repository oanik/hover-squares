import { v4 as uuidv4 } from 'uuid';

import { GridData } from '../interfaces';

export const generateRows = (numCells: number): GridData[] => {
  return new Array(numCells).fill({}).map((_e, row) => {
    return {
      id: uuidv4(),
      rowNumber: row + 1,
      cells: new Array(numCells).fill({}).map((_e, col) => {
        return {
          id: uuidv4(),
          isHovered: false,
          rowNumber: row + 1,
          cellNumber: col + 1
        }
      })
    }
  })
};
