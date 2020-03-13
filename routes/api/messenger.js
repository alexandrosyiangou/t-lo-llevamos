const MessengerRouter = require('express').Router()

MessengerRouter.post('/insert', (req, res) => {
  const {body} = req;
  console.log(body)
  // const response = await insertMessenger();
  res.send('Insert Messenger Successful') 
})

MessengerRouter.patch('/update', (req, res) => {
  const {body} = req;
  console.log(body)
  // const response = await updateMessenger();
  res.send('Update Messenger Successful') 
})

MessengerRouter.delete('/delete', (req, res) => {
  const {body} = req;
  console.log(body)
  // const response = await deleteMessenger();
  res.send('Delete Messenger Successful') 
})

MessengerRouter.get('/', (req, res) => res.send('Messenger Router'))

module.exports = MessengerRouter
