export class GridPosition {
  column: number
  row: number
  typeName: string
  constructor(column?: number, row?: number) {
    this.typeName = 'GridPosition'
    this.column = column || 0
    this.row = row || 0
  }
  toString() {
    return this.column + ', ' + this.row
  }
}
