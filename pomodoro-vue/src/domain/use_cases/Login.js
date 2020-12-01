import UserRepository from '../../data/repositories/UserRepository'

class Login {
  constructor() {
    this.userRepository = new UserRepository()
  }
  
  async execute(email, password) {
    // try {
      return await this.userRepository.login(email, password)
    // } catch(e) {
    //   throw e
    // }
  }
}

export default Login