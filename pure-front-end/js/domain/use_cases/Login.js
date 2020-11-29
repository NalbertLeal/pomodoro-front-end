import UserRepository from '../../data/repositories/UserRepository'
import TokenRepository from '../../data/repositories/TokenRepository'

class Login {
  constructor() {
    this.userRepository = new UserRepository()
    this.tokenRepository = new TokenRepository()
  }
  
  execute(login, password) {
    try {
      const user = this.userRepository.getUser(login, password)
      const token = this.tokenRepository.getToken(user)
      return token
    } catch(e) {
      throw e
    }
  }
}

export default Login