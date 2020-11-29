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

let db = {}
let tokens = {}

function isTokenValid(token, res) {
  let ok = tokens[token] || false
  if (!ok) {
    res
    .status(400)
    .json({
      'error': 'invalid token'
    })
    return false
  }
  return true
} 

app.post('/login', (req, res) => {
  try {
    let email = req.body.email || ''
    let password = req.body.password || ''

    let user = db[email]
    if (!user || user.password != password) {
      res
        .status(404)
        .json({
          'error': 'user not found'
        })
    }

    let token = uuid()
    tokens[token] = email

    res
      .status(200)
      .json({
        'token': token,
        'name': db[email]['name']
      })
  } catch(e) {
    res
    .status(400)
    .json({
      'error': e
    })
  }
})

app.post('/logout', (req, res) => {
  try {
    let token = req.body.token || ''

    if (!isTokenValid(token, res)) {
      return
    }

    delete tokens[token]

    res.status(200)
  } catch(e) {
    res
    .status(400)
    .json({
      'error': e
    })
  }
})

app.post('/register', (req, res) => {
  try {
    let name = req.body.name || ''
    let email = req.body.email || ''
    let password = req.body.password || ''

    let user = db[email] || false
    if (user) {
      res
        .status(400)
        .json({
          'error': 'user alread exists'
        })
    }

    db[email] = {
      'name': name,
      'email': email,
      'password': password
    }

    let token = uuid()
    tokens[token] = email

    res
      .status(200)
      .json({
        'token': token
      })
  } catch(e) {
    res
    .status(400)
    .json({
      'error': e
    })
  }
})

app.get('/task', (req, res) => {
  try {
    let token = req.query.token || ''

    if (!isTokenValid(token, res)) {
      return
    }

    let email = tokens[token]

    res
      .status(200)
      .json({
        'tasks': db[email]['tasks']
      })
  } catch(e) {
    res
    .status(400)
    .json({
      'error': e
    })
  }
})

app.post('/task', (req, res) => {
  try {
    let token = req.body.token || ''

    if (!isTokenValid(token, res)) {
      return
    }

    let email = tokens[token]
    let taskTitle = req.body.title
    let taskDescription = req.body.description

    const id = uuid()
    db[email]['tasks']
      .push({
        'id': id,
        'title': taskTitle,
        'description': taskDescription
      })

    res
      .status(200)
      .json({
        'id': id
      })
  } catch(e) {
    res
    .status(400)
    .json({
      'error': e
    })
  }
})

app.delete('/task', (req, res) => {
  try {
    let token = req.query.token || ''

    if (!isTokenValid(token, res)) {
      return
    }

    let taskId = parseInt(req.query.id) || -1
    
    let email = tokens[token]
    db[email]['tasks'] = db[email]['tasks'].filter(e => {
      if (e.id != taskId) {
        return e
      }
    })

    res.status(200)
  } catch(e) {
    res
    .status(400)
    .json({
      'error': e
    })
  }
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