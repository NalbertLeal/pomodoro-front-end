import UserRepository from '../../data/repositories/UserRepository'

class RegisterNewUser {
  constructor() {
    this.userRepository = new UserRepository()
  }

  async execute(user) {
    try {
      await this.userRepository.createUser(user)
    } catch (e) {
      throw e
    }
  }
}

export default RegisterNewUser