// const fetch = require('node-fetch')
const ApiRouter = require('express').Router()

const ClientRouter = require('./api/client')
const MessengerRouter = require('./api/messenger')

// function getAuthorizationToken() {
//   const url = 'https://stim.selfip.com:8091/api/Admin/login'
//   const body = {email: 'prueba', password: '1234'}
//   const options = {
//     method: 'post',
//     body: JSON.stringify(body)
//   }

//   return fetch(url, options)
//     .then(console.log)
// }

ApiRouter.use('/client', ClientRouter)

ApiRouter.use('/messenger', MessengerRouter)

ApiRouter.get('/', (req, res) => res.send('Api Router'))

// ApiRouter.get('/token', async (req, res) => {
//   res.send(await getAuthorizationToken())
// })

module.exports = ApiRouter
