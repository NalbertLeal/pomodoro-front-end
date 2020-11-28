class StringField {
  constructor(str) {
      this.str = str
  }

  get isValid() {
    return this.str !== undefined &&
      (typeof this.str) === 'String'
  }
}

export default StringField