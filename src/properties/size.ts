import { SizeType } from '../enums/size-type'
export class Size {
  sizeType: SizeType
  typeName: string
  value: number
  constructor(value?: number, sizeType?: SizeType) {
    this.typeName = 'Size'
    this.value = value || 0
    this.sizeType = sizeType || SizeType.Absolute
  }
  getValue(unitSize: number) {
    if (typeof unitSize == 'number' && this.sizeType == SizeType.Relative) {
      return this.value * unitSize
    }
    return this.value
  }
  toString() {
    return this.value + (this.sizeType == SizeType.Relative ? '*' : '')
  }
}
