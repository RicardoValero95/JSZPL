module.exports = class GraphicData {
  data: any;
  height: any;
  typeName: any;
  width: any;
  constructor(width: any, height: any, data: any) {
    this.typeName = 'GraphicData'

    this.data = data || []
    this.width = width || 0
    this.height = height || 0
  }

  toString() {
    return this.width + ' x ' + this.height
  }
}
