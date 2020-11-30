function isAuthenticated() {
  const currentUser = localStorage.getItem('token')

  if (currentUser) return true
  else return false
}

export default isAuthenticated