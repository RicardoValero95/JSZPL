// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'BaseCompon... Remove this comment to see the full error message
const BaseComponent = require('./base-component')
export = class Raw extends BaseComponent {
  constructor() {
    super()
    this.typeName = 'Raw'
    this.data = ''
  }
  generateZPL(
    offsetLeft: any,
    offsetTop: any,
    availableWidth: any,
    availableHeight: any,
    widthUnits: any,
    heightUnits: any
  ) {
    if (!this.data || this.data === '') {
      return ''
    }
    return this.data + '\n'
  }
}
