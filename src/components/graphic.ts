// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'BaseVisual... Remove this comment to see the full error message
const BaseVisualComponent = require('./base-visual-component.js')
const GraphicData = require('../properties/graphic-data.js')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'ImageProce... Remove this comment to see the full error message
const { ImageProcessor } = require('../helpers/label-tools.js')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Box'.
const Box = require('./box.js')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'LabelTools... Remove this comment to see the full error message
const LabelTools = require('../helpers/label-tools.js')
const ZPLImageTools = require('../helpers/zpl-image-tools.js')

module.exports = class Graphic extends BaseVisualComponent {
  constructor() {
    super()

    this.typeName = 'Graphic'

    this.data = new GraphicData()
    this.border = 0
  }

  generateContainer() {
    var container = new Box()
    container.border = this.border
    container.margin = this.margin
    container.top = this.top
    container.left = this.left
    return container
  }

  extractImageData(cb: any) {
    var processor = LabelTools.ImageProcessor || new ImageProcessor()
    var imageData = processor.processImage(this.data)
    cb(imageData)
  }

  generateZPL(offsetLeft: any, offsetTop: any, availableWidth: any, availableHeight: any, widthUnits: any, heightUnits: any) {
    var container = this.generateContainer()
    var zpl = container.generateZPL(offsetLeft, offsetTop, availableWidth, availableHeight, widthUnits, heightUnits)

    var position = this.getPosition(offsetLeft, offsetTop, availableWidth, availableHeight, widthUnits, heightUnits)
    var imageData = LabelTools.ImageResizer.resize(
      position.width,
      position.height,
      this.data.width,
      this.data.height,
      this.data.data
    )

    zpl += '^FO' + Math.round(position.left) + ',' + Math.round(position.top)

    if (this.invert) {
      zpl += '^FR'
    }

    var widthBytes = Math.ceil(position.width / 8)
    var byteCount = widthBytes * position.height
    var hexData = ZPLImageTools.generateHexAscii(position.width, position.height, imageData)
    hexData = ZPLImageTools.encodeHexAscii(hexData)

    zpl += '^GFA,' + byteCount + ',' + byteCount + ',' + widthBytes + ',' + hexData + '^FS\n'

    return zpl
  }

  generateBinaryImage(binaryBase: any, offsetLeft: any, offsetTop: any, availableWidth: any, availableHeight: any, widthUnits: any, heightUnits: any) {
    var container = this.generateContainer()
    container.generateBinaryImage(
      binaryBase,
      offsetLeft,
      offsetTop,
      availableWidth,
      availableHeight,
      widthUnits,
      heightUnits
    )

    var position = this.getPosition(offsetLeft, offsetTop, availableWidth, availableHeight, widthUnits, heightUnits)
    var imageData = LabelTools.ImageResizer.resize(
      position.width,
      position.height,
      this.data.width,
      this.data.height,
      this.data.data
    )

    for (var y = 0; y < position.height; y++) {
      for (var x = 0; x < position.width; x++) {
        var yIndex = y + position.top
        var xIndex = x + position.left

        var index = y * position.width + x

        var value = imageData[index]

        if (value) {
          if (this.invert) {
            binaryBase[yIndex][xIndex] = !binaryBase[yIndex][xIndex]
          } else {
            binaryBase[yIndex][xIndex] = true
          }
        }
      }
    }
  }
}
