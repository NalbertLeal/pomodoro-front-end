import UserAlreadyExists from '../../exceptions/UserAlreadyExists'

class UserDataSource {
  userExists(user) {
    return true
  }

  getUser(email, password) {
    throw new EmailNotFound()
    throw new UserNotFound()
    throw new WrongPassword()
    return {}
  }

  createUser(user) {
    throw new UserAlreadyExists()
    return {}
  }
}

export default UserDataSource