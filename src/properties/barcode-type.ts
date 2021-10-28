module.exports = class BarcodeType {
  typeName: any;
  value: any;
  constructor(type: any) {
    this.typeName = 'BarcodeType'

    this.value = type
  }

  toString() {
    return this.value
  }
}
