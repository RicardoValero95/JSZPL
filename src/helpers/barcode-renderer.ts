// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Box'.
const Box = require('../components/box.js')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Text'.
const Text = require('../components/text.js')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'FontFamily... Remove this comment to see the full error message
const FontFamilyName = require('../enums/font-family-name.js')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'AlignmentV... Remove this comment to see the full error message
const AlignmentValue = require('../enums/alignment-value.js')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Alignment'... Remove this comment to see the full error message
const Alignment = require('../properties/alignment.js')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'FontFamily... Remove this comment to see the full error message
const FontFamily = require('../properties/font-family.js')

module.exports = class BarcodeRenderer {
  constructor() {}

  render(width: any, height: any, type: any, data: any) {
    var box = new Box()
    box.width = width
    box.height = height
    box.border = 2

    var text = new Text()
    box.content.push(text)
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
    text.fontFamily = new FontFamily(FontFamilyName.B)
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
    text.text = 'BARCODE'

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'verticalAlignment' does not exist on typ... Remove this comment to see the full error message
    text.verticalAlignment = new Alignment(AlignmentValue.Center)
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'horizontalAlignment' does not exist on t... Remove this comment to see the full error message
    text.horizontalAlignment = new Alignment(AlignmentValue.Center)

    // @ts-expect-error ts-migrate(2403) FIXME: Subsequent variable declarations must have the sam... Remove this comment to see the full error message
    var data = []
    for (var y = 0; y < height; y++) {
      data.push([])
      for (var x = 0; x < width; x++) {
        data[y].push(0)
      }
    }

    box.generateBinaryImage(data, 0, 0, width, height, width, height)

    return data
  }
}
