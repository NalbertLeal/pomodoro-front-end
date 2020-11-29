import UserDataSource from '../data_sources/UserDataSource'
import User from '../../domain/entities/User'

class UserRepository {
  constructor() {
    this.userDataSource = new UserDataSource()
  }

  async login(email, password) {
    try {
      const res = await this.userDataSource.getUser(email, password)

      localStorage.setItem('token', res.token)

      return new User(
        res.name, 
        email, 
        password
      )
    } catch (e) {
      throw e
    }
  }

  async createUser(user) {
    try {
      const res = await this.userDataSource.getUser(user)

      localStorage.setItem('token', res.token)

      return true
    } catch (e) {
      throw e
    }
  }

  async logout() {
    try {
      const token = localStorage.getItem('token') 
      await this.userDataSource.logout(token)
      localStorage.removeItem('token')
    } catch (e) {
      throw e
    }
  } 
}

export default UserRepository