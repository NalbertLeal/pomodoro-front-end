class StringField {
  constructor(str) {
      this.str = str
  }

  get isValid() {
    return this.str !== undefined &&
      (typeof this.str) === 'string'
  }
}

export default StringField