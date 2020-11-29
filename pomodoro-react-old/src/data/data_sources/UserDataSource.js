import UserAlreadyExists from '../../exceptions/UserAlreadyExists'

class UserDataSource {
  userExists(user) {
    return true
  }

  login(email, password) {
    try {
      if (!email) throw new EmailNotFound()
      if (!password) throw new WrongPassword()

      const res = await fetch(
        'http://localhost:3818/login', 
        { 
          method: 'POST',
          headers: new Headers(),
          mode: 'cors',
          cache: 'default',
          body: {
            'email': email,
            'password': password
          }
        })

      const resBody = await res.json()
      if (resBody.error) {
        throw new UserNotFound()
      }

      return {
        token: resBody.token,
      }
    } catch(e) {
      throw e
    }
  }

  logout(token) {
    try {
      const res = await fetch(
        'http://localhost:3818/logout',
        { 
          method: 'POST',
          headers: new Headers(),
          mode: 'cors',
          cache: 'default',
          body: {
            'token': token
          }
        })

      const resBody = await res.json()
      if (resBody.error) {
        throw new UserNotFound()
      }

      return true
    } catch(e) {
      throw e
    }
  }

  createUser(user) {
    try {
      const res = await fetch(
        'http://localhost:3818/register',
        { 
          method: 'POST',
          headers: new Headers(),
          mode: 'cors',
          cache: 'default',
          body: {
            'name': user.name,
            'email': user.email,
            'password': user.password
          }
        })

      const resBody = await res.json()
      if (resBody.error) {
        throw new UserAlreadyExists()
      }

      return {
        'token': resBody.token
      }
    } catch(e) {
      throw e
    }
  }
}

export default UserDataSource