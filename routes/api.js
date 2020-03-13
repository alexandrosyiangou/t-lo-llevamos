const ApiRouter = require('express').Router()

const ClientRouter = require('./api/client')
const MessengerRouter = require('./api/messenger')

ApiRouter.use('/client', ClientRouter)

ApiRouter.use('/messenger', MessengerRouter)

module.exports = ApiRouter
