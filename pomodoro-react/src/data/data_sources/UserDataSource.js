import EmailNotFound from '../../exceptions/EmailNotFound'
import WrongPassword from '../../exceptions/WrongPassword'
import UserNotFound from '../../exceptions/UserNotFound'
import InvalidToken from '../../exceptions/InvalidToken'
import UserAlreadyExists from '../../exceptions/UserAlreadyExists'

class UserDataSource {
  userExists(user) {
    return true
  }

  async login(email, password) {
    if (!email) throw new EmailNotFound()
    if (!password) throw new WrongPassword()

    const res = await fetch(
      'http://localhost:3818/login', 
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      })

    const resBody = await res.json()
    if (resBody.error) {
      throw new UserNotFound()
    }

    return {
      token: resBody.token,
    }
  }

  async logout(token) {
    const res = await fetch(
      'http://localhost:3818/logout',
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
          'token': token
        })
      })

    const resBody = await res.json()
    if (resBody.error) {
      switch (resBody.error) {
        case 'invalid token':
          throw new InvalidToken()
        default:
          throw new UserNotFound()
      }
    }

    return true
  }

  async createUser(user) {
    const res = await fetch(
      'http://localhost:3818/register',
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
          'name': user.name.name,
          'email': user.email.email,
          'password': user.password.password
        })
      })

    const resBody = await res.json()
    if (resBody.error) {
      throw new UserAlreadyExists()
    }

    return {
      'token': resBody.token
    }
  }
}

export default UserDataSource