export class Alignment {
  typeName: any
  value: any
  constructor(value: any) {
    this.typeName = 'Alignment'
    this.value = value
  }
  toString() {
    return this.value
  }
}
