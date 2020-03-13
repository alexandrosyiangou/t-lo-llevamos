const https = require('https')
const ApiRouter = require('express').Router()

const ClientRouter = require('./api/client')
const MessengerRouter = require('./api/messenger')

ApiRouter.use('/client', ClientRouter)

ApiRouter.use('/messenger', MessengerRouter)

ApiRouter.get('/', (req, res) => res.send('Api Router'))

ApiRouter.post('/token', (req, res) => {
  const options = {
    body: {
      email: 'prueba',
      password: '1234'
    }
  }

  // TODO: Get token
})

module.exports = ApiRouter
