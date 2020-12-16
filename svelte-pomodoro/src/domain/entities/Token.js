import StringField from './value_ojects/StringField'

class Token {
  constructor(token, lifetime, createdAt) {
    this.token = new StringField(token)
    this.lifetime = lifetime
    this.createdAt = createdAt
  }

  get isValid() {
    return this.token.isValid &&
      this.lifetime === 1800 &&
      (typeof this.createdAt) === 'object'
  }
}

export default Token