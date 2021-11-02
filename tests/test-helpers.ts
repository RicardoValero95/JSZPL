import { Label } from '../src/components/label'
import { PrintDensityName } from '../src/enums/print-density-name'
import { PrintDensity } from '../src/properties/print-density'
import { Spacing } from '../src/properties/spacing'

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
