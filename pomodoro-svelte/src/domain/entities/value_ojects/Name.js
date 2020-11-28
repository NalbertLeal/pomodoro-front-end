class Name {
  constructor(name) {
    if (typeof(name) !== 'String') {
      this.name = ''
    } else {
        this.name = name
    }
  }

  get isValid() {
    let passwordRegExp = new RegExp('[a-zA-Z ]+')
    let regexMatch = passwordRegExp?.match(password) ?? []

    return name.length < 60 && 
      password.length > 6 && 
      regexMatch.length == 1
  }
}