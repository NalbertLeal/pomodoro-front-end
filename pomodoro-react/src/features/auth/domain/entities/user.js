class User {
  constructor(email, password, id='',  name='', createdAt= new Date()) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.createdAt = createdAt
  }
}

export default User