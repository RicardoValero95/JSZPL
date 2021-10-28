const { Raw } = require('../src/jszpl.js');
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'testHelper... Remove this comment to see the full error message
const testHelpers = require('./test-helpers.js');

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('add raw data to a label', () => {
  const label = testHelpers.createLabel();

  const raw = new Raw();
  label.content.push(raw);
  raw.data = `^FO50,50^GB100,100,100^FS
^FO75,75^FR^GB100,100,100^FS
^FO93,93^GB40,40,40^FS`;

  const zpl = label.generateZPL();

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(zpl).toBe(`^XA
^FO50,50^GB100,100,100^FS
^FO75,75^FR^GB100,100,100^FS
^FO93,93^GB40,40,40^FS
^XZ`);
});