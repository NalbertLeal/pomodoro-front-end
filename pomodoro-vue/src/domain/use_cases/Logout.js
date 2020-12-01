import UserRepository from '../../data/repositories/UserRepository'

class Logout {
  constructor() {
    this.userRepository = new UserRepository()
  }
  
  async execute() {
    await this.userRepository.logout()
  }
}

export default Logout