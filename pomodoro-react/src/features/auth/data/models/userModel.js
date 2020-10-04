import User from '../../domain/entities/user'

class UserModel extends User {
  constructor(id, name, email, password, createdAt) {
    super(email, password, id, name, createdAt)
  }

  static fromJson(jsonStr) {
    const json = JSON.parse(jsonStr)
    return new UserModel(json.email, json.password, json.id, json.name, json.createdAt)
  }

  toJson() {
    return JSON.stringify({
      'id': this.id,
      'name': this.name,
      'email': this.email,
      'password': this.password,
      'createdAt': this.createdAt
    })
  }
}

export default UserModel