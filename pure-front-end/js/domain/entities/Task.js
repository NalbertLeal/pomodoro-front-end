class Tasks {
  constructor(title, descrition, id=-1) {
    this.id = id
    this.title = new StringField(title)
    this.descrition = new StringField(descrition)
  }

  get isValid() {
    return this.title.isValid &&
      this.descrition.isValid
  }
}

export default Tasks