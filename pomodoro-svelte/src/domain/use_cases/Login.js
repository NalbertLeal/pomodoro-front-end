import UserRepository from '../../data/repositories/UserRepository'
import TokenRepository from '../../data/repositories/TokenRepository'

class Login {
  constructor() {
    this.userRepository = new UserRepository()
  }
  
  execute(email, password) {
    try {
      return await this.userRepository.login(email, password)
    } catch(e) {
      throw e
    }
  }
}

export default Login