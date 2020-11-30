import UserRepository from '../../data/repositories/UserRepository'

class Logout {
  constructor() {
    this.userRepository = new UserRepository()
  }
  
  async execute() {
    try {
      await this.userRepository.logout()
    } catch(e) {
      throw e
    }
  }
}

export default Logout