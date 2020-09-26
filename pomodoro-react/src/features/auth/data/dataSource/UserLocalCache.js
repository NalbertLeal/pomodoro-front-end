import { keccak224 } from 'js-sha3'

import UserModel from '../models/userModel'

class UserLocalCache {
  constructor() {
    this._currentAuthUser = undefined
    
    const userJson = localStorage.getItem('currentUser') || undefined
    if (userJson) {
      this._currentAuthUser = UserModel.fromJson(userJson) // JSON.parse( userJson )
    }
  }
  
  get isUserAuthenticated() {
    return this._currentAuthUser !== undefined
  }
  
  getUserToken() {
    return this._currentAuthUser
  }
  
  setUserToCache(user) {
    const modUser = user
    modUser.password = keccak224(user.password)
    const userJsonStr = JSON.stringify(modUser)
    localStorage.setItem(`user:${user.email}`, userJsonStr)
    this._currentAuthUser = modUser
  }
  
  login(user) {
    try {
      if (this.isUserAuthenticated) {
        return
      }
      const userJsonStr = localStorage.getItem(`user:${user.email}`) || undefined
      if (!userJsonStr) throw new Error('Wrong email or this accont was never authenticated at this machine.')

      const localStorageUser = UserModel.fromJson(userJsonStr)
      const passwordHash = keccak224(user.password)
      if (passwordHash !== localStorageUser.password) throw new Error('Wrong password.')
    } catch (e) {
      throw e;
    }
  }
}

export default UserLocalCache