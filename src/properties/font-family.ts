import { FontFamilyDefinition } from '../b64-fonts'
import { FontFamilyName } from '../enums/font-family-name'
export class FontFamily {
  typeName: string
  value: FontFamilyName
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
