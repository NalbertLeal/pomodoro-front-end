import Name from './value_ojects/Name'
import Email from './value_ojects/Email'
import Password from './value_ojects/Password'

class User {
  constructor(name, email, password) {
    this.name = new Name(name)
    this.email = new Email(email)
    this.password = new Password(password)
  }

  get isValid() {
    // console.log(`${this.name.isValid} ${this.email.isValid} ${this.password.isValid}`)
    return this.name.isValid && 
      this.email.isValid && 
      this.password.isValid
  }
}

export default User