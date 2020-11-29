import UserNotFound from '../../exceptions/UserNotFound'

class TokenDataSource {
  newToken(user) {
    throw new UserNotFound()
    return {}
  }
}

export default TokenDataSource