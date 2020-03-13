const ApiRouter = require('express').Router()

const ClientRouter = require('./api/client')
const MessengerRouter = require('./api/messenger')

ApiRouter.use('/client', ClientRouter)

ApiRouter.use('/messenger', MessengerRouter)

ApiRouter.get('/', (req, res) => res.send('Api Router'))

module.exports = ApiRouter
