import BaseContainerControl from './base-container-component'
export = class BaseGraphicComponent extends BaseContainerControl {
  border: number
  fill: boolean
  constructor() {
    super()
    this.border = 0
    this.fill = false
  }
}
