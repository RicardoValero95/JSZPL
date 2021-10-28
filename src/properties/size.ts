// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'SizeType'.
const SizeType = require('../enums/size-type.js')

module.exports = class Size {
  sizeType: any;
  typeName: any;
  value: any;
  constructor(value: any, sizeType: any) {
    this.typeName = 'Size'

    this.value = value || 0
    this.sizeType = sizeType || SizeType.Absolute
  }

  getValue(unitSize: any) {
    if (typeof unitSize == 'number' && this.sizeType == SizeType.Relative) {
      return this.value * unitSize
    }
    return this.value
  }

  toString() {
    return this.value + (this.sizeType == SizeType.Relative ? '*' : '')
  }
}
