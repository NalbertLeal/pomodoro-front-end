class Password {
  constructor(password) {
    if (typeof(password) !== 'string') {
      this.password = ''
    } else {
      this.password = password
    }
  }

  get isValid() {
    let passwordRegExp = new RegExp('[0-9a-zA-Z_]+')
    let regexMatch = this.password?.match(passwordRegExp) ?? []

    return this.password.length < 21 && 
      this.password.length > 7 && 
      regexMatch.length == 1
  }
}

export default Password