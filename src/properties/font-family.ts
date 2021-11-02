import FontFamilyDefinition from '../b64-fonts'
export = class FontFamily {
  typeName: any
  value: any
  constructor(value: any) {
    this.typeName = 'FontFamily'
    this.value = value
  }
  get definition() {
    return FontFamilyDefinition[this.value]
  }
  toString() {
    return this.value
  }
}
