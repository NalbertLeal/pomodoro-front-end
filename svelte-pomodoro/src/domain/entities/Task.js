import StringField from './value_ojects/StringField'

class Task {
  constructor(description, id=-1) {
    this.id = id
    this._description = new StringField(description)
  }

  get description() {
    return this._description.str
  }

  get isValid() {
    return this._description.isValid
  }
}

export default Task