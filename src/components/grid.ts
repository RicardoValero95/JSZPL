import { BaseContainerComponent } from './base-container-component'
import { Box } from './box'
import { Size } from '../properties/size'
import { Spacing } from '../properties/spacing'
import { SizeType } from '../enums/size-type'
export class Grid extends BaseContainerComponent {
  typeName: string
  columns: any[]
  rows: any[]
  columnSpacing: number
  rowSpacing: number
  constructor() {
    super()
    this.typeName = 'Grid'
    this.columns = []
    this.rows = []
    this.columnSpacing = 0
    this.rowSpacing = 0
  }
  calculateSizing(availableWidth: any, availableHeight: any, widthUnits: any, heightUnits: any) {
    var units = this.calculateUnits()
    var spacingLeft = this.margin.left
    var spacingTop = this.margin.top
    var spacingHorizontal = spacingLeft + this.margin.right
    var spacingVertical = spacingTop + this.margin.bottom
    var width = availableWidth - spacingHorizontal
    var height = availableHeight - spacingVertical
    // @ts-expect-error ts-migrate(2403) FIXME: Subsequent variable declarations must have the sam... Remove this comment to see the full error message
    var widthUnits = (width - units.absolute.width) / (units.relative.width || 1)
    // @ts-expect-error ts-migrate(2403) FIXME: Subsequent variable declarations must have the sam... Remove this comment to see the full error message
    var heightUnits = (height - units.absolute.height) / (units.relative.height || 1)
    return {
      spacingTop: spacingTop,
      spacingLeft: spacingLeft,
      width: width,
      height: height,
      widthUnits: widthUnits,
      heightUnits: heightUnits
    }
  }
  generateChildren(availableWidth: any, availableHeight: any) {
    const columnDefinitions = this.columns
    if (columnDefinitions.length == 0) {
      columnDefinitions.push(new Size(1, SizeType.Relative))
    }
    const rowDefinitions = this.rows
    if (rowDefinitions.length == 0) {
      rowDefinitions.push(new Size(1, SizeType.Relative))
    }
    const units = {
      absolute: {
        width: 0,
        height: 0
      },
      relative: {
        width: 0,
        height: 0
      }
    }
    for (let cell of columnDefinitions) {
      if (typeof cell == 'object') {
        if (cell.sizeType == SizeType.Absolute) {
          units.absolute.width += cell.value
        } else {
          units.relative.width += cell.value
        }
      } else if (typeof cell == 'number') {
        units.absolute.width += cell
      }
    }
    for (let cell of rowDefinitions) {
      if (typeof cell == 'object') {
        if (cell.sizeType == SizeType.Absolute) {
          units.absolute.height += cell.value
        } else {
          units.relative.height += cell.value
        }
      } else if (typeof cell == 'number') {
        units.absolute.height += cell
      }
    }
    const borderSpacing = (this.border || 0) * 4
    units.absolute.width += borderSpacing
    units.absolute.height += borderSpacing
    const absoluteWidth = availableWidth - borderSpacing - this.columnSpacing * (columnDefinitions.length + 1)
    const absoluteHeight = availableHeight - borderSpacing - this.rowSpacing * (rowDefinitions.length + 1)
    const widthUnits = (absoluteWidth - units.absolute.width) / (units.relative.width || 1)
    const heightUnits = (absoluteHeight - units.absolute.height) / (units.relative.height || 1)
    const content = [] as any[]
    const contentCells = [] as any[]
    let top = this.rowSpacing
    let unusedHeight = absoluteHeight + (this.border || 0) * 2
    for (let y = 0; y < rowDefinitions.length; y++) {
      content[y] = []
      let unusedWidth = absoluteWidth + (this.border || 0) * 2
      let left = this.columnSpacing
      let height = Math.ceil(this.getSize(rowDefinitions[y], heightUnits)) + (this.border || 0)
      if (y == this.rows.length - 1) {
        height = unusedHeight
      }
      unusedHeight -= height
      for (let x = 0; x < this.columns.length; x++) {
        const cell = new Box()
        content[y].push(cell)
        contentCells.push(cell)
        let width = Math.ceil(this.getSize(columnDefinitions[x], widthUnits)) + (this.border || 0)
        if (x == this.columns.length - 1) {
          width = unusedWidth
        }
        unusedWidth -= width
        cell.width = width
        cell.height = height
        cell.top.value = top
        cell.left.value = left
        cell.border = this.border
        cell.padding = this.padding
        left += width + this.columnSpacing
      }
      top += height + this.rowSpacing
    }
    for (let element of this.content) {
      if (!element.grid) continue
      if (element.grid.row < 0 || element.grid.row >= rowDefinitions.length) continue
      if (element.grid.column < 0 || element.grid.column >= columnDefinitions.length) continue
      content[element.grid.row][element.grid.column].content.push(element)
    }
    const contentBox = new Box()
    contentBox.content = contentCells
    contentBox.fixed = this.fixed
    contentBox.width = this.width
    contentBox.height = this.height
    contentBox.border = this.border
    contentBox.invert = this.invert
    contentBox.padding = new Spacing()
    return contentBox
  }
  generateZPL(
    offsetLeft: number,
    offsetTop: number,
    availableWidth: number,
    availableHeight: number,
    widthUnits: any,
    heightUnits: any
  ) {
    var position = this.getPosition(offsetLeft, offsetTop, availableWidth, availableHeight, widthUnits, heightUnits)
    var contentBox = this.generateChildren(position.width, position.height)
    var sizing = this.calculateSizing(availableWidth, availableHeight, widthUnits, heightUnits)
    return contentBox.generateZPL(
      position.left,
      position.top,
      sizing.width,
      sizing.height,
      sizing.widthUnits,
      sizing.heightUnits
    )
  }
  generateBinaryImage(
    binaryBase: any,
    offsetLeft: any,
    offsetTop: any,
    availableWidth: any,
    availableHeight: any,
    widthUnits: any,
    heightUnits: any
  ) {
    var position = this.getPosition(offsetLeft, offsetTop, availableWidth, availableHeight, widthUnits, heightUnits)
    var contentBox = this.generateChildren(position.width, position.height)
    var sizing = this.calculateSizing(availableWidth, availableHeight, widthUnits, heightUnits)
    contentBox.generateBinaryImage(
      binaryBase,
      position.left,
      position.top,
      sizing.width,
      sizing.height,
      sizing.widthUnits,
      sizing.heightUnits
    )
  }
}
