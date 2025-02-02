import BaseGraphicComponent from './base-graphic-component'
export class Box extends BaseGraphicComponent {
  typeName: string
  cornerRadius: number
  constructor() {
    super()
    this.typeName = 'Box'
    this.cornerRadius = 0
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
    var zpl = '^FO' + Math.round(position.left) + ',' + Math.round(position.top)
    if (this.invert) {
      zpl += '^FR'
    }
    var thickness = this.border
    if (this.fill) {
      thickness = Math.min(position.width, position.height)
    }
    var shorterSide = Math.min(position.width, position.height)
    var roundingIndex = Math.round((this.cornerRadius * 16) / shorterSide)
    if (thickness > 0) {
      zpl +=
        '^GB' + position.width + ',' + position.height + ',' + (thickness || '') + ',,' + roundingIndex + '^FS' + '\n'
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
    var borderSize = this.border || 0
    var yTop = this.cornerRadius
    var yBottom = position.height - this.cornerRadius - 1
    var xLeft = this.cornerRadius
    var xRight = position.width - this.cornerRadius - 1
    if (this.fill || this.border > 0) {
      for (var y = 0; y < position.height; y++) {
        for (var x = 0; x < position.width; x++) {
          var xIndex = x + position.left
          var yIndex = y + position.top
          if (yIndex < 0 || xIndex < 0 || yIndex >= binaryBase.length || xIndex >= binaryBase[yIndex].length) continue
          const getCenter = () => {
            if (this.cornerRadius > 0) {
              if (y < yTop) {
                if (x < xLeft) {
                  // top left
                  return {
                    x: xLeft,
                    y: yTop
                  }
                } else if (x > xRight) {
                  // top right
                  return {
                    x: xRight,
                    y: yTop
                  }
                }
              } else if (y > yBottom) {
                if (x < xLeft) {
                  // bottom left
                  return {
                    x: xLeft,
                    y: yBottom
                  }
                } else if (x > xRight) {
                  // bottom right
                  return {
                    x: xRight,
                    y: yBottom
                  }
                }
              }
            }
          }
          const center = getCenter()
          if (center != undefined) {
            var distance = Math.sqrt(Math.pow(y - center.y, 2) + Math.pow(x - center.x, 2))
            if (distance <= this.cornerRadius + 1) {
              if (this.fill || distance >= this.cornerRadius - this.border) {
                if (this.invert) {
                  binaryBase[yIndex][xIndex] = !binaryBase[yIndex][xIndex]
                } else {
                  binaryBase[yIndex][xIndex] = true
                }
              }
            }
            continue
          }
          if (
            this.fill ||
            y < borderSize ||
            y >= position.height - borderSize ||
            x < borderSize ||
            x >= position.width - borderSize
          ) {
            if (this.invert) {
              binaryBase[yIndex][xIndex] = !binaryBase[yIndex][xIndex]
            } else {
              binaryBase[yIndex][xIndex] = true
            }
          }
        }
      }
    }
    super.generateBinaryImage(binaryBase, position.left, position.top, position.width, position.height)
  }
}
