import UserRepository from '../../data/repositories/UserRepository'

class RegisterNewUser {
  constructor() {
    this.userRepository = new UserRepository()
  }

  async execute(user) {
    await this.userRepository.createUser(user)
  }
}

export default RegisterNewUser