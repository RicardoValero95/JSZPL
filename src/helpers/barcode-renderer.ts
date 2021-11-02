import { Box } from '../components/box'
import { Text } from '../components/text'
import { FontFamilyName } from '../enums/font-family-name'
import { AlignmentValue } from '../enums/alignment-value'
import { Alignment } from '../properties/alignment'
import { FontFamily } from '../properties/font-family'
export class BarcodeRenderer {
  constructor() {}
  render(width: any, height: any, type: any, data: any) {
    var box = new Box()
    box.width = width
    box.height = height
    box.border = 2
    var text = new Text()
    box.content.push(text)
    text.fontFamily = new FontFamily(FontFamilyName.B)
    text.text = 'BARCODE'
    text.verticalAlignment = new Alignment(AlignmentValue.Center)
    text.horizontalAlignment = new Alignment(AlignmentValue.Center)
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
