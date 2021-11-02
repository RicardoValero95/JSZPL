// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Text'.
const { Grid, Text, Size, Spacing, FontFamily, FontFamilyName, SizeType } = require('../src/jszpl')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'testHelper... Remove this comment to see the full error message
const testHelpers = require('./test-helpers')

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('add grid to a label', () => {
  const label = testHelpers.createLabel()

  const grid = new Grid()
  label.content.push(grid)
  grid.columns.push(new Size(1, SizeType.Relative))
  grid.columns.push(new Size(1, SizeType.Relative))
  grid.rows.push(new Size(2, SizeType.Relative))
  grid.rows.push(new Size(2, SizeType.Relative))
  grid.columnSpacing = 2
  grid.rowSpacing = 2
  grid.border = 2
  grid.padding = new Spacing(10)

  const text00 = new Text()
  grid.content.push(text00)
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  text00.text = '(0, 0)'
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  text00.fontFamily = new FontFamily(FontFamilyName.D)

  const text10 = new Text()
  grid.content.push(text10)
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  text10.text = '(1, 0)'
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  text10.fontFamily = new FontFamily(FontFamilyName.D)
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'grid' does not exist on type 'Text'.
  text10.grid.column = 1

  const text01 = new Text()
  grid.content.push(text01)
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  text01.text = '(0, 1)'
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  text01.fontFamily = new FontFamily(FontFamilyName.D)
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'grid' does not exist on type 'Text'.
  text01.grid.row = 1

  const text11 = new Text()
  grid.content.push(text11)
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  text11.text = '(1, 1)'
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  text11.fontFamily = new FontFamily(FontFamilyName.D)
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'grid' does not exist on type 'Text'.
  text11.grid.column = 1
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'grid' does not exist on type 'Text'.
  text11.grid.row = 1

  const zpl = label.generateZPL()

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(zpl).toBe(`^XA
^FO10,10^GB780,380,2,,0^FS
^FO14,14^GB381,181,2,,0^FS
^FO26,26^AD,,,
^FB357,1,0,L,0
^FD(0, 0)^FS
^FO397,14^GB389,181,2,,0^FS
^FO409,26^AD,,,
^FB365,1,0,L,0
^FD(1, 0)^FS
^FO14,197^GB381,189,2,,0^FS
^FO26,209^AD,,,
^FB357,1,0,L,0
^FD(0, 1)^FS
^FO397,197^GB389,189,2,,0^FS
^FO409,209^AD,,,
^FB365,1,0,L,0
^FD(1, 1)^FS
^XZ`)
})
