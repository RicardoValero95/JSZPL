import { BaseContainerComponent } from './base-container-component'
export = class BaseGraphicComponent extends BaseContainerComponent {
  border: number
  fill: boolean
  constructor() {
    super()
    this.border = 0
    this.fill = false
  }
}
