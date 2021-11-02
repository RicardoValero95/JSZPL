import { BaseComponent } from './base-component'
export class Raw extends BaseComponent {
  typeName: string
  data: string
  constructor() {
    super()
    this.typeName = 'Raw'
    this.data = ''
  }
  generateZPL(
    offsetLeft: number,
    offsetTop: number,
    availableWidth: number,
    availableHeight: number,
    widthUnits: any,
    heightUnits: any
  ) {
    if (!this.data || this.data === '') {
      return ''
    }
    return this.data + '\n'
  }
}
