import UserRepository from '../../data/repositories/UserRepository'
import User from '../entities/User'
import InvalidUser from '../../exceptions/InvalidUser'

class Login {
  constructor() {
    this.userRepository = new UserRepository()
  }
  
  async execute(email, password, rememberMe=false) {
    const user = new User('', email, password)
    if (!user.isValid) {
      throw new InvalidUser()
    }
    await this.userRepository.login(email, password, rememberMe)
  }
}

export default Login