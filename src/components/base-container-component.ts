import { BaseVisualComponent } from './base-visual-component'
import { Spacing } from '../properties/spacing'
export class BaseContainerComponent extends BaseVisualComponent {
  padding: Spacing
  content: any[]
  constructor() {
    super()
    this.padding = new Spacing()
    this.content = []
  }
  calculateSizing(availableWidth: number, availableHeight: number, widthUnits: any, heightUnits: any) {
    let units = this.calculateUnits()
    let spacingLeft = this.margin.left + this.padding.left
    let spacingTop = this.margin.top + this.padding.top
    let spacingHorizontal = spacingLeft + this.margin.right + this.padding.right
    let spacingVertical = spacingTop + this.margin.bottom + this.padding.right
    let width = availableWidth - spacingHorizontal - (this.border || 0) * 2
    let height = availableHeight - spacingVertical - (this.border || 0) * 2
    widthUnits = (width - units.absolute.width) / (units.relative.width || 1)
    heightUnits = (height - units.absolute.height) / (units.relative.height || 1)
    return {
      spacingTop: spacingTop,
      spacingLeft: spacingLeft,
      width: width,
      height: height,
      widthUnits: widthUnits,
      heightUnits: heightUnits
    }
  }
  generateZPL(
    offsetLeft: number,
    offsetTop: number,
    availableWidth: number,
    availableHeight: number,
    widthUnits?: any,
    heightUnits?: any
  ) {
    var sizing = this.calculateSizing(availableWidth, availableHeight, widthUnits, heightUnits)
    var zpl = ''
    for (var c_id in this.content) {
      var element = this.content[c_id]
      var left = offsetLeft + sizing.spacingLeft + (this.border || 0)
      var top = offsetTop + sizing.spacingTop + (this.border || 0)
      if (element.fixed) {
        left = this.getSize(element.left)
        top = this.getSize(element.top)
      }
      zpl += element.generateZPL(left, top, sizing.width, sizing.height, sizing.widthUnits, sizing.heightUnits)
    }
    return zpl
  }
  generateBinaryImage(
    binaryBase: any,
    offsetLeft: number,
    offsetTop: number,
    availableWidth: number,
    availableHeight: number,
    widthUnits?: any,
    heightUnits?: any
  ) {
    var sizing = this.calculateSizing(availableWidth, availableHeight, widthUnits, heightUnits)
    for (var c_id in this.content) {
      var element = this.content[c_id]
      var left = offsetLeft + sizing.spacingLeft + (this.border || 0)
      var top = offsetTop + sizing.spacingTop + (this.border || 0)
      if (element.fixed) {
        left = this.getSize(element.left)
        top = this.getSize(element.top)
      }
      element.generateBinaryImage(
        binaryBase,
        left,
        top,
        sizing.width,
        sizing.height,
        sizing.widthUnits,
        sizing.heightUnits
      )
    }
  }
}
