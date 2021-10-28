// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'FontFamily... Remove this comment to see the full error message
const FontFamilyDefinition = require('../b64-fonts.js')

module.exports = class FontFamily {
  typeName: any;
  value: any;
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
