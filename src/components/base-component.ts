export class BaseComponent {
  notImplemented: any
  constructor() {
    this.notImplemented = ['typeName']
  }
  generateZPL(
    offsetLeft: number,
    offsetTop: number,
    availableWidth: number,
    availableHeight: number,
    widthUnits?: any,
    heightUnits?: any
  ) {
    return ''
  }
  generateXML(availableWidth: any, availableHeight: any) {
    return ''
  }
  generateBinaryImage(
    binaryBase: any,
    offsetLeft: number,
    offsetTop: number,
    availableWidth: number,
    availableHeight: number,
    widthUnits?: any,
    heightUnits?: any
  ) {}
}
