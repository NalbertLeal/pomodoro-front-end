import UserRepository from '../../data/repositories/UserRepository'

class Login {
  constructor() {
    this.userRepository = new UserRepository()
  }
  
  async execute(email, password) {
    await this.userRepository.login(email, password)
  }
}

export default Login