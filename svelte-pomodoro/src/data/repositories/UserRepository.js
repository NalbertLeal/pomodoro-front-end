import UserDataSource from '../data_sources/UserDataSource'
import User from '../../domain/entities/User'

class UserRepository {
  constructor() {
    this.userDataSource = new UserDataSource()
  }

  async login(email, password, rememberMe) {
    const res = await this.userDataSource.login(email, password)

    if (rememberMe) {
      sessionStorage.setItem("token", res.token)
    } else {
      localStorage.setItem('token', res.token)
    }

    return new User(
      res.name, 
      email, 
      password
    )
  }

  async createUser(user, rememberMe) {
    const res = await this.userDataSource.createUser(user)

    if (rememberMe) {
      sessionStorage.setItem("token", res.token)
    } else {
      localStorage.setItem('token', res.token)
    }

    return true
  }

  async logout() {
    const token = localStorage.getItem('token') 
    try {
      localStorage.removeItem('token')
      sessionStorage.removeItem('token')
    } catch(e) {}
    await this.userDataSource.logout(token)
  } 
}

export default UserRepository