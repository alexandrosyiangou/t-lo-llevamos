const MessengerRouter = require('express').Router()

MessengerRouter.post('/insert', (req, res) => {

})

MessengerRouter.get('/', (req, res) => res.send('Messenger Router'))

module.exports = MessengerRouter
