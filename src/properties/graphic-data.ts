export class GraphicData {
  typeName: string
  data: any[]
  height: number
  width: number
  constructor(width?: number, height?: number, data?: any[]) {
    this.typeName = 'GraphicData'
    this.data = data || []
    this.width = width || 0
    this.height = height || 0
  }
  toString() {
    return this.width + ' x ' + this.height
  }
}
