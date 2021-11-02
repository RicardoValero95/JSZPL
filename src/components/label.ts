// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'BaseContai... Remove this comment to see the full error message
const BaseContainerComponent = require('./base-container-component')
const PrintDensity = require('../properties/print-density')
const PrintDensityName = require('../enums/print-density-name')
export = class Label extends BaseContainerComponent {
  constructor() {
    super()
    this.typeName = 'Label'
    this.printDensity = new PrintDensity(PrintDensityName['8dpmm'])
    this.notImplemented = ['typeName', 'fixed', 'grid', 'margin', 'left', 'top']
  }
  generateZPL() {
    var zpl = '^XA'
    zpl += '\n'
    var width = this.getSize(this.width) * this.printDensity.value
    var height = this.getSize(this.height) * this.printDensity.value
    zpl += super.generateZPL(0, 0, width, height)
    zpl += '^XZ'
    return zpl
  }
  generateBinaryImage(binaryBase: any) {
    var width = this.getSize(this.width) * this.printDensity.value
    var height = this.getSize(this.height) * this.printDensity.value
    for (var y = 0; y < height; y++) {
      binaryBase.push([])
      for (var x = 0; x < width; x++) {
        binaryBase[y].push(false)
      }
    }
    super.generateBinaryImage(binaryBase, 0, 0, width, height)
  }
}
