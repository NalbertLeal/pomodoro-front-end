class Password {
  constructor(password) {
    if (typeof(password) !== 'String') {
      this.password = ''
    } else {
      this.password = password
    }
  }

  get isValid() {
    let passwordRegExp = new RegExp('[0-9a-zA-Z_]+')
    let regexMatch = passwordRegExp?.match(password) ?? []

    return (password.length === 128) || (password.length < 20 && 
      password.length > 8 && 
      regexMatch.length == 1)
  }
}