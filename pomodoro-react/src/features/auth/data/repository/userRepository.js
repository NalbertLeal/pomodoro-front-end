import UserLocalCache from '../dataSource/UserLocalCache'
import UserModel from '../models/userModel'

class UserRepository {
  static authenticateUser(user) {
    if (navigator.onLine) {
      return;
    } else {
      const userLocalCache = new UserLocalCache()
      if ( userLocalCache.isUserAuthenticated ) {
        throw new Error('There\'s alread an authenticated user.')
      }
      userLocalCache.login(user)
    }
  }

  static createNewUser(user) {
    if (navigator.onLine) {
      return;
    } else {
      const userLocalCache = new UserLocalCache()
      userLocalCache.setUserToCache(user)
    }
  }

  static recoverUserPassword() {
    if (navigator.onLine) {
      return;
    } else {
      const userLocalCache = new UserLocalCache()
    }
  }
}

export default UserRepository