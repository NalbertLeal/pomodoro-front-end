const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

const uuid = require('./uuid')

const app = express()
const port = 3818

app.use(bodyParser())
app.use(methodOverride())
app.use(cors())

const tokens = {}
const accounts = {}
const lists = {}

function generateAndStoreToken(email) {
  const newToken = uuid()
  tokens[newToken] = email
  return newToken
}

function returnError(res, msg) {
  res.status(200)
  .json({
    error: msg
  })
}

app.post('/auth', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    returnError(res, 'Auth error, email or password not found in request.')
    return 
  }

  if (!(email in accounts)) {
    returnError(res, 'Auth error: the email isn\'t associated to any user.')
    return 
  }

  if (accounts[email].password === password) {
    res.status(200)
      .json({
        token: generateAndStoreToken(email)
      })
  }
})

app.post('/create-user', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const name = req.body.name


  if (!email || !password || !name) {
    returnError(res, 'Create user error, name, email or password not found in request.')
    return 
  }

  if (email in accounts) {
    returnError(res, 'Crete user error: the email is already associated to an user.')
    return 
  }
  
  accounts[email] = {
    email: email,
    name: name,
    password: password
  }
  
  return res
    .status(200)
    .json({
      token: generateAndStoreToken(email)
    })
})

app.get('/user', (req, res) => {
  const token = req.query.token
  if (!token) {
    returnError(res, 'Token error: The token must be provided into the request body.')
    return
  }
  
  if (!(token in tokens)) {
    returnError(res, 'Token error: The token isn\'t valid.')
    return
  }

  const email = tokens[token]
  const user = accounts[email]
  user.password = ''

  res
    .status(200)
    .json({
      user: user
    })
})

app.get('/', (req, res) => {
  res.status(404)
    .json({
      error: 'not found'
    })
})

app.post('/', (req, res) => {
  res.status(404)
    .json({
      error: 'not found'
    })
})

app.put('/', (req, res) => {
  res.status(404)
    .json({
      error: 'not found'
    })
})

app.delete('/', (req, res) => {
  res.status(404)
    .json({
      error: 'not found'
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})