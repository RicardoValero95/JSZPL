// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Text'.
const { Text, FontFamilyName, FontFamily, Alignment, AlignmentValue } = require('../src/jszpl.js');
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'testHelper... Remove this comment to see the full error message
const testHelpers = require('./test-helpers.js');

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('add text to a label', () => {
  const label = testHelpers.createLabel();

  const text = new Text();
  label.content.push(text);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  text.fontFamily = new FontFamily(FontFamilyName.D);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  text.text = 'Hello World!';

  const zpl = label.generateZPL();

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(zpl).toBe(`^XA
^FO10,10^AD,,,
^FB780,1,0,L,0
^FDHello World!^FS
^XZ`);
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('add multiline text to a label', () => {
  const label = testHelpers.createLabel();

  const text = new Text();
  label.content.push(text);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  text.fontFamily = new FontFamily(FontFamilyName.D);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  text.text = 'Hello\n World!\nThis\nIs\nA\nNew\nLine';

  const zpl = label.generateZPL();

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(zpl).toBe(`^XA
^FO10,10^AD,,,
^FB780,1,0,L,0
^FDHello^FS
^FO10,31^AD,,,
^FB780,1,0,L,0
^FD World!^FS
^FO10,52^AD,,,
^FB780,1,0,L,0
^FDThis^FS
^FO10,73^AD,,,
^FB780,1,0,L,0
^FDIs^FS
^FO10,94^AD,,,
^FB780,1,0,L,0
^FDA^FS
^FO10,115^AD,,,
^FB780,1,0,L,0
^FDNew^FS
^FO10,136^AD,,,
^FB780,1,0,L,0
^FDLine^FS
^XZ`);
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('add text with alignment to a label', () => {
  const label = testHelpers.createLabel();

  const textTopLeft = new Text();
  label.content.push(textTopLeft);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  textTopLeft.fontFamily = new FontFamily(FontFamilyName.D);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'verticalAlignment' does not exist on typ... Remove this comment to see the full error message
  textTopLeft.verticalAlignment = new Alignment(AlignmentValue.Start);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'horizontalAlignment' does not exist on t... Remove this comment to see the full error message
  textTopLeft.horizontalAlignment = new Alignment(AlignmentValue.Start);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  textTopLeft.text = 'Top Left';

  const textTopCenter = new Text();
  label.content.push(textTopCenter);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  textTopCenter.fontFamily = new FontFamily(FontFamilyName.D);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'verticalAlignment' does not exist on typ... Remove this comment to see the full error message
  textTopCenter.verticalAlignment = new Alignment(AlignmentValue.Start);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'horizontalAlignment' does not exist on t... Remove this comment to see the full error message
  textTopCenter.horizontalAlignment = new Alignment(AlignmentValue.Center);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  textTopCenter.text = 'Top Center';

  const textTopRight = new Text();
  label.content.push(textTopRight);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  textTopRight.fontFamily = new FontFamily(FontFamilyName.D);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'verticalAlignment' does not exist on typ... Remove this comment to see the full error message
  textTopRight.verticalAlignment = new Alignment(AlignmentValue.Start);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'horizontalAlignment' does not exist on t... Remove this comment to see the full error message
  textTopRight.horizontalAlignment = new Alignment(AlignmentValue.End);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  textTopRight.text = 'Top Right';

  const textCenterLeft = new Text();
  label.content.push(textCenterLeft);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  textCenterLeft.fontFamily = new FontFamily(FontFamilyName.D);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'verticalAlignment' does not exist on typ... Remove this comment to see the full error message
  textCenterLeft.verticalAlignment = new Alignment(AlignmentValue.Center);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'horizontalAlignment' does not exist on t... Remove this comment to see the full error message
  textCenterLeft.horizontalAlignment = new Alignment(AlignmentValue.Start);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  textCenterLeft.text = 'Center Left';

  const textCenterCenter = new Text();
  label.content.push(textCenterCenter);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  textCenterCenter.fontFamily = new FontFamily(FontFamilyName.D);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'verticalAlignment' does not exist on typ... Remove this comment to see the full error message
  textCenterCenter.verticalAlignment = new Alignment(AlignmentValue.Center);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'horizontalAlignment' does not exist on t... Remove this comment to see the full error message
  textCenterCenter.horizontalAlignment = new Alignment(AlignmentValue.Center);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  textCenterCenter.text = 'Center Center';

  const textCenterRight = new Text();
  label.content.push(textCenterRight);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  textCenterRight.fontFamily = new FontFamily(FontFamilyName.D);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'verticalAlignment' does not exist on typ... Remove this comment to see the full error message
  textCenterRight.verticalAlignment = new Alignment(AlignmentValue.Center);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'horizontalAlignment' does not exist on t... Remove this comment to see the full error message
  textCenterRight.horizontalAlignment = new Alignment(AlignmentValue.End);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  textCenterRight.text = 'Center Right';

  const textBottomLeft = new Text();
  label.content.push(textBottomLeft);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  textBottomLeft.fontFamily = new FontFamily(FontFamilyName.D);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'verticalAlignment' does not exist on typ... Remove this comment to see the full error message
  textBottomLeft.verticalAlignment = new Alignment(AlignmentValue.End);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'horizontalAlignment' does not exist on t... Remove this comment to see the full error message
  textBottomLeft.horizontalAlignment = new Alignment(AlignmentValue.Start);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  textBottomLeft.text = 'Bottom Left';

  const textBottomCenter = new Text();
  label.content.push(textBottomCenter);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  textBottomCenter.fontFamily = new FontFamily(FontFamilyName.D);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'verticalAlignment' does not exist on typ... Remove this comment to see the full error message
  textBottomCenter.verticalAlignment = new Alignment(AlignmentValue.End);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'horizontalAlignment' does not exist on t... Remove this comment to see the full error message
  textBottomCenter.horizontalAlignment = new Alignment(AlignmentValue.Center);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  textBottomCenter.text = 'Bottom Center';

  const textBottomRight = new Text();
  label.content.push(textBottomRight);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  textBottomRight.fontFamily = new FontFamily(FontFamilyName.D);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'verticalAlignment' does not exist on typ... Remove this comment to see the full error message
  textBottomRight.verticalAlignment = new Alignment(AlignmentValue.End);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'horizontalAlignment' does not exist on t... Remove this comment to see the full error message
  textBottomRight.horizontalAlignment = new Alignment(AlignmentValue.End);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  textBottomRight.text = 'Bottom Right';

  const zpl = label.generateZPL();

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(zpl).toBe(`^XA
^FO10,10^AD,,,
^FB780,1,0,L,0
^FDTop Left^FS
^FO10,10^AD,,,
^FB780,1,0,C,0
^FDTop Center^FS
^FO10,10^AD,,,
^FB780,1,0,R,0
^FDTop Right^FS
^FO10,85^AD,,,
^FB780,1,0,L,0
^FDCenter Left^FS
^FO10,64^AD,,,
^FB780,1,0,C,0
^FDCenter Center^FS
^FO10,74^AD,,,
^FB780,1,0,R,0
^FDCenter Right^FS
^FO10,159^AD,,,
^FB780,1,0,L,0
^FDBottom Left^FS
^FO10,117^AD,,,
^FB780,1,0,C,0
^FDBottom Center^FS
^FO10,138^AD,,,
^FB780,1,0,R,0
^FDBottom Right^FS
^XZ`);
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('add scaled text to a label', () => {
  const label = testHelpers.createLabel();

  const text = new Text();
  label.content.push(text);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type 'Text... Remove this comment to see the full error message
  text.fontFamily = new FontFamily(FontFamilyName.D);

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type 'Text'.
  text.text = 'Hello World!';
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'characterHeight' does not exist on type ... Remove this comment to see the full error message
  text.characterHeight = 5;
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'characterWidth' does not exist on type '... Remove this comment to see the full error message
  text.characterWidth = 30;

  const zpl = label.generateZPL();

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(zpl).toBe(`^XA
^FO10,10^AD,5,30,
^FB780,1,0,L,0
^FDHello World!^FS
^XZ`);
});