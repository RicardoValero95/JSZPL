import { FontFamilyDefinition } from './b64-fonts'
FontFamilyDefinition.initialize()
const elements = {
  Text: require('./components/text'),
  Box: require('./components/box'),
  Line: require('./components/line'),
  Circle: require('./components/circle'),
  Graphic: require('./components/graphic'),
  Grid: require('./components/grid'),
  Barcode: require('./components/barcode'),
  Raw: require('./components/raw')
}
export default {
  SizeType: require('./enums/size-type'),
  Rotation: require('./enums/rotation'),
  PrintDensityName: require('./enums/print-density-name'),
  FontFamilyName: require('./enums/font-family-name'),
  BarcodeTypeName: require('./enums/barcode-type-name'),
  AlignmentValue: require('./enums/alignment-value'),
  FontFamilyDefinition: FontFamilyDefinition,
  LabelTools: require('./helpers/label-tools'),
  ImageProcessor: require('./helpers/image-processor'),
  ImageResizer: require('./helpers/image-resizer'),
  BarcodeRenderer: require('./helpers/barcode-renderer'),
  Size: require('./properties/size'),
  Spacing: require('./properties/spacing'),
  GridPosition: require('./properties/grid-position'),
  FontFamily: require('./properties/font-family'),
  Alignment: require('./properties/alignment'),
  PrintDensity: require('./properties/print-density'),
  GraphicData: require('./properties/graphic-data'),
  BarcodeType: require('./properties/barcode-type'),
  Label: require('./components/label'),
  Text: elements.Text,
  Grid: elements.Grid,
  Box: elements.Box,
  Line: elements.Line,
  Circle: elements.Circle,
  Graphic: elements.Graphic,
  Barcode: elements.Barcode,
  Raw: elements.Raw,
  elements: elements
}
