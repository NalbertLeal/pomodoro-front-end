import UserDataSource from '../data_sources/UserDataSource'
import User from '../../domain/entities/User'

class UserRepository {
  constructor() {
    this.userDataSource = new UserDataSource()
  }

  async login(email, password) {
    const res = await this.userDataSource.login(email, password)

    localStorage.setItem('token', res.token)

    return new User(
      res.name, 
      email, 
      password
    )
  }

  async createUser(user) {
    const res = await this.userDataSource.createUser(user)

    localStorage.setItem('token', res.token)

    return true
  }

  async logout() {
    const token = localStorage.getItem('token') 
    localStorage.removeItem('token')
    await this.userDataSource.logout(token)
  } 
}

export default UserRepository