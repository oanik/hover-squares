export interface GameModeData {
  field: number,
  name: string
}

export interface GridData {
  id: string,
  rowNumber: number,
  cells: CellData[]
}

export interface CellData {
  id: string,
  isHovered: boolean,
  rowNumber: number,
  cellNumber: number
}
