import { AlignmentValue } from '../enums/alignment-value'

export class Alignment {
  typeName: any
  value: AlignmentValue
  constructor(value: any) {
    this.typeName = 'Alignment'
    this.value = value
  }
  toString() {
    return this.value
  }
}
