import { BarcodeTypeName } from '../enums/barcode-type-name'

export class BarcodeType {
  typeName: any
  value: BarcodeTypeName
  constructor(type: any) {
    this.typeName = 'BarcodeType'
    this.value = type
  }
  toString() {
    return this.value
  }
}
