module.exports = class GridPosition {
  column: any;
  row: any;
  typeName: any;
  constructor(column: any, row: any) {
    this.typeName = 'GridPosition'

    this.column = column || 0
    this.row = row || 0
  }

  toString() {
    return this.column + ', ' + this.row
  }
}
