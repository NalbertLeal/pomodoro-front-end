import UserDataSource from '../data_sources/UserDataSource'
import User from '../../domain/entities/User'

class UserRepository {
  constructor() {
    this.userDataSource = new UserDataSource()
  }

  getUser(email, password) {
    try {
      const user = this.userDataSource.getUser(email, password)
      return new User(
        user.email, 
        user.password
      )
    } catch (e) {
      throw e
    }
  }

  createUser(user) {
    try {
      this.userDataSource.getUser(user)
    } catch (e) {
      throw e
    }
  }
}

export default UserRepository