module.exports = class BaseComponent {
  notImplemented: any;
  constructor() {
    this.notImplemented = ['typeName']
  }

  generateZPL(offsetLeft: any, offsetTop: any, availableWidth: any, availableHeight: any, widthUnits: any, heightUnits: any) {
    return ''
  }

  generateXML(availableWidth: any, availableHeight: any) {
    return ''
  }

  generateBinaryImage(binaryBase: any, offsetLeft: any, offsetTop: any, availableWidth: any, availableHeight: any, widthUnits: any, heightUnits: any) {}
}