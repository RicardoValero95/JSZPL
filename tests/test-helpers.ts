// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Spacing'.
const { Label, PrintDensity, PrintDensityName, Spacing } = require('../src/jszpl')

export = {
  createLabel: () => {
    const label = new Label()
    label.printDensity = new PrintDensity(PrintDensityName['8dpmm'])
    label.width = 100
    label.height = 50
    label.padding = new Spacing(10)

    return label
  }
}
