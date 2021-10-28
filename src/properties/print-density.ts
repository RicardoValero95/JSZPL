module.exports = class PrintDensity {
  typeName: any;
  value: any;
  constructor(value: any) {
    this.typeName = 'PrintDensity'

    this.value = value
  }

  toString() {
    return this.value + ' dpmm'
  }
}
