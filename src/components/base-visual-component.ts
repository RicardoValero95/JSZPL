// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'BaseCompon... Remove this comment to see the full error message
const BaseComponent = require('./base-component.js')
const GridPosition = require('../properties/grid-position.js')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Size'.
const Size = require('../properties/size.js')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Spacing'.
const Spacing = require('../properties/spacing.js')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'SizeType'.
const SizeType = require('../enums/size-type.js')

module.exports = class BaseVisualComponent extends BaseComponent {
  constructor() {
    super()

    this.invert = false
    this.fixed = false

    this.grid = new GridPosition()

    this.width = new Size()
    this.height = new Size()

    this.top = new Size()
    this.left = new Size()

    this.margin = new Spacing()
  }

  getPosition(offsetLeft: any, offsetTop: any, availableWidth: any, availableHeight: any, widthUnits: any, heightUnits: any) {
    // gets start position and size of content
    var left = this.getSize(this.left, widthUnits) + this.margin.left
    var top = this.getSize(this.top, heightUnits) + this.margin.top

    var width = this.getSize(this.width, widthUnits) || availableWidth - this.margin.horizontal
    var height = this.getSize(this.height, heightUnits) || availableHeight - this.margin.vertical

    if (typeof this.top == 'object' && this.top.sizeType == SizeType.Fraction) {
      top = availableHeight * this.top.value
    }
    if (typeof this.left == 'object' && this.left.sizeType == SizeType.Fraction) {
      left = availableWidth * this.left.value
    }

    return {
      left: Math.round(left + offsetLeft),
      top: Math.round(top + offsetTop),
      width: Math.round(width),
      height: Math.round(height)
    }
  }

  getSize(prop: any, unitSize: any) {
    if (typeof prop == 'number') {
      return prop
    } else {
      return prop.getValue(unitSize)
    }
  }

  calculateUnits() {
    var units = {
      absolute: {
        width: 0,
        height: 0
      },
      relative: {
        width: 0,
        height: 0
      }
    }

    var elements = this.content || []

    for (let element of elements) {
      if (!element.margin || !element.border || !element.width || !element.height) continue

      units.absolute.width += element.margin.horizontal + (this.border || 0)
      units.absolute.height += element.margin.vertical + (this.border || 0)

      if (typeof element.border == 'number') {
        units.absolute.width += element.border * 2
        units.absolute.height += element.border * 2
      }

      if (typeof element.width == 'number') {
        units.absolute.width += element.width
      } else if (element.width.sizeType == SizeType.Absolute) {
        units.absolute.width += element.width.value
      } else {
        units.relative.width += element.width.value
      }

      if (typeof element.height == 'number') {
        units.absolute.height += element.height
      } else if (element.height.sizeType == SizeType.Absolute) {
        units.absolute.height += element.height.value
      } else {
        units.relative.height += element.height.value
      }
    }

    return units
  }
}
