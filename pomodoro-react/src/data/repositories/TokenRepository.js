import UserDataSource from '../data_sources/UserDataSource'
import TokenDataSource from '../data_sources/TokenDataSource'

class TokenRepository {
  constructor() {
    this.userDataSource = new UserDataSource()
    this.tokenDataSource = new TokenDataSource()
  }
  
  getToken(user) {
    try {
      if (this.userDataSource.userExists(user)) {
        const tokenJSON = this.tokenDataSource.newToken(user)
        return new Token(
          tokenJSON.token, 
          tokenJSON.lifetime,
          tokenJSON.createdAt
        )
      }
      throw new Error('User don\'t exist.')
    } catch (e) {
      throw e
    }
  }
}

export default TokenRepository