const ClientRouter = require('express').Router()

ClientRouter.post('/insert', (req, res) => {

})

ClientRouter.get('/', (req, res) => res.send('Client Router'))

module.exports = ClientRouter
