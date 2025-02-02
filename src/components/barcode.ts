import { BaseVisualComponent } from './base-visual-component'
import { BarcodeType } from '../properties/barcode-type'
import { BarcodeTypeName } from '../enums/barcode-type-name'
import { BarcodeRenderer } from '../helpers/barcode-renderer'
import { Values } from '../enums'

const InterpretationLine: {
  [k: number]: string
} = {
  0: 'Y',
  1: 'N'
} as const
export type InterpretationLine = Values<typeof InterpretationLine>

export class Barcode extends BaseVisualComponent {
  typeName: string
  // data: string
  data: [] | string
  dataPrepend: string
  maxLength: number
  type: BarcodeType
  subset: string
  interpretationLine: 'Y' | 'N'
  constructor() {
    super()
    this.typeName = 'Barcode'
    this.data = []
    this.dataPrepend = ''
    this.maxLength = 32
    this.type = new BarcodeType(BarcodeTypeName.Code11)
    this.subset = ''
    this.interpretationLine = 'Y'
    this.notImplemented = ['typeName', 'invert']
  }
  generateZPL(
    offsetLeft: number,
    offsetTop: number,
    availableWidth: number,
    availableHeight: number,
    widthUnits: any,
    heightUnits: any
  ) {
    var position = this.getPosition(offsetLeft, offsetTop, availableWidth, availableHeight, widthUnits, heightUnits)
    var zpl = ''
    // TODO: What is this
    // switch (this.type.value) {
    //   case BarcodeTypeName.Code49:
    //     zpl += '^FO' + Math.round(position.left) + ',' + Math.round(position.top + 25)
    //     break
    //   default:
    //     zpl += '^FO' + Math.round(position.left) + ',' + Math.round(position.top)
    //     break
    // }

    // TODO: Why was it not here?
    var zpl = '^FO' + Math.round(position.left) + ',' + Math.round(position.top)
    if (this.invert) {
      zpl += '^FR'
    }
    switch (this.type.value) {
      case BarcodeTypeName.Code11:
        zpl += '^B1N,N,' + position.height + ',' + this.interpretationLine + ',N'
        break
      case BarcodeTypeName.Interleaved25:
        zpl += '^B2N,' + position.height + ',' + this.interpretationLine + ',N,N'
        break
      case BarcodeTypeName.Code39:
        zpl += '^B3N,N,' + position.height + ',' + this.interpretationLine + ',N'
        break
      case BarcodeTypeName.PlanetCode:
        zpl += '^B5N,' + position.height + ',' + this.interpretationLine + ',N'
        break
      case BarcodeTypeName.PDF417:
        var rowHeight = 10
        let rows = Math.ceil(position.height / rowHeight)
        var bytes = this.maxLength * rows
        var columns = Math.ceil(bytes / rows)
        zpl += '^B7N,' + rowHeight + ',0,' + columns + ',' + rows + ',N'
        break
      case BarcodeTypeName.EAN8:
        zpl += '^B8N,' + position.height + ',' + this.interpretationLine + ',N'
        break
      case BarcodeTypeName.UPCE:
        zpl += '^B9N,' + position.height + ',' + this.interpretationLine + ',N,Y'
        break
      case BarcodeTypeName.Code93:
        zpl += '^BAN,' + position.height + ',' + this.interpretationLine + ',N,N'
        break
      case BarcodeTypeName.Code128:
        zpl += '^BCN,' + position.height + ',' + this.interpretationLine + ',N,N,N'
        if (this.dataPrepend === '') {
          switch (this.subset) {
            case 'A':
              this.dataPrepend += '>9'
              break
            case 'B':
              this.dataPrepend += '>:'
              break
            case 'C':
              this.dataPrepend += '>;'
              break
          }
        }
        break
      case BarcodeTypeName.EAN13:
        zpl += '^BEN,' + position.height + ',' + this.interpretationLine + ',N'
        break
      case BarcodeTypeName.Industrial25:
        zpl += '^BIN,' + position.height + ',' + this.interpretationLine + ',N'
        break
      case BarcodeTypeName.Standard25:
        zpl += '^BJN,' + position.height + ',' + this.interpretationLine + ',N'
        break
      case BarcodeTypeName.ANSICodabar:
        zpl += '^BKN,N,' + position.height + ',' + this.interpretationLine + ',N,A,A'
        break
      case BarcodeTypeName.Logmars:
        zpl += '^BLN,' + position.height + ',N'
        break
      case BarcodeTypeName.MSI:
        zpl += '^BMN,B,' + position.height + ',' + this.interpretationLine + ',N,N'
        break
      case BarcodeTypeName.Plessey:
        zpl += '^BPN,N,' + position.height + ',' + this.interpretationLine + ',N'
        break
      case BarcodeTypeName.QRCode:
        var magnification = Math.min(Math.floor(position.height / 25), 10)
        zpl += '^BQ,2,' + magnification + ',Q,7'
        if (this.dataPrepend === '') {
          this.dataPrepend = 'QA,'
        }
        break
      case BarcodeTypeName.DataMatrix:
        zpl += '^BXN,10,200,,,~,1'
        break
      case BarcodeTypeName.PostNet:
        zpl += '^BZN,' + position.height + ',' + this.interpretationLine + ',N'
        break
    }
    zpl += '^FD' + this.dataPrepend + this.data
    zpl += '^FS\n'
    return zpl
  }
  generateBinaryImage(
    binaryBase: any,
    offsetLeft: number,
    offsetTop: number,
    availableWidth: number,
    availableHeight: number,
    widthUnits: any,
    heightUnits: any
  ) {
    var position = this.getPosition(offsetLeft, offsetTop, availableWidth, availableHeight, widthUnits, heightUnits)
    // TODO: how to use barcode renderer
    var renderer = new BarcodeRenderer()
    var barcodeData = renderer.render(position.width, position.height, this.type, this.data)
    for (var y = 0; y < position.height; y++) {
      for (var x = 0; x < position.width; x++) {
        var yIndex = y + position.top
        var xIndex = x + position.left
        binaryBase[yIndex][xIndex] = barcodeData[y][x]
      }
    }
  }
}
