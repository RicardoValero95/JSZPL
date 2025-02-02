import BaseGraphicComponent from './base-graphic-component'
export = class Circle extends BaseGraphicComponent {
  typeName: string
  constructor() {
    super()
    this.typeName = 'Circle'
  }
  generateZPL(
    offsetLeft: number,
    offsetTop: number,
    availableWidth: number,
    availableHeight: number,
    widthUnits: any,
    heightUnits: any
  ) {
    const position = this.getPosition(offsetLeft, offsetTop, availableWidth, availableHeight, widthUnits, heightUnits)
    let zpl = '^FO' + Math.round(position.left) + ',' + Math.round(position.top)
    if (this.invert) {
      zpl += '^FR'
    }
    let thickness = this.border
    if (this.fill) {
      thickness = Math.min(position.width, position.height)
    }
    if (thickness > 0) {
      if (position.width != position.height) {
        // ellipse
        zpl += '^GE' + position.width + ',' + position.height + ',' + (thickness || '') + ',B' + '^FS' + '\n'
      } else {
        // circle
        zpl += '^GC' + position.width + ',' + (thickness || '') + ',B' + '^FS' + '\n'
      }
    } else {
      zpl += '\n'
    }
    zpl += super.generateZPL(position.left, position.top, position.width, position.height)
    return zpl
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
    var yCenter = position.height / 2
    var xCenter = position.width / 2
    var widthHalf = position.width / 2
    var heightHalf = position.height / 2
    var widthHalfBorder = widthHalf - this.border
    var heightHalfBorder = heightHalf - this.border
    if (this.fill || this.border > 0) {
      for (var y = 0; y < position.height; y++) {
        for (var x = 0; x < position.width; x++) {
          var yIndex = Math.round(y + position.top)
          var xIndex = Math.round(x + position.left)
          var value = false
          value =
            Math.pow(x - xCenter, 2) / Math.pow(widthHalf, 2) + Math.pow(y - yCenter, 2) / Math.pow(heightHalf, 2) <= 1
          if (this.fill == false) {
            // @ts-expect-error ts-migrate(2447) FIXME: The '&=' operator is not allowed for boolean types... Remove this comment to see the full error message
            value &=
              Math.pow(x - xCenter, 2) / Math.pow(widthHalfBorder, 2) +
                Math.pow(y - yCenter, 2) / Math.pow(heightHalfBorder, 2) >=
              1
          }
          if (value) {
            if (this.invert) {
              binaryBase[yIndex][xIndex] = !binaryBase[yIndex][xIndex]
            } else {
              binaryBase[yIndex][xIndex] = value
            }
          }
        }
      }
    }
    super.generateBinaryImage(binaryBase, position.left, position.top, position.width, position.height)
  }
}
