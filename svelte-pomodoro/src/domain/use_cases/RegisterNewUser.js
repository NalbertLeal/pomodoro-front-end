import UserRepository from '../../data/repositories/UserRepository'

class RegisterNewUser {
  constructor() {
    this.userRepository = new UserRepository()
  }

  async execute(user, rememberMe=false) {
    try {
      await this.userRepository.createUser(user,rememberMe)
    } catch (e) {
      throw e
    }
  }
}

export default RegisterNewUser