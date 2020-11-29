class Name {
  constructor(name) {
    if (typeof(name) !== 'string') {
      this.name = ''
    } else {
        this.name = name
    }
  }

  get isValid() {
    let nameRegExp = new RegExp('[a-zA-Z ]+')
    let regexMatch = this.name?.match(nameRegExp) ?? []

    return this.name.length < 60 && 
      this.name.length > 6 && 
      regexMatch.length == 1
  }
}

export default Name