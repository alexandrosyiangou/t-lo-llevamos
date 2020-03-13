const MessengerRouter = require('express').Router()
const {insertMessenger, updateMessenger, deleteMessenger} = require('../../controllers/messenger')

MessengerRouter.post('/insert', (req, res) => {
  const {body} = req;
  console.log(body)
  const response = await insertMessenger();
  if (response.message) {
    res.send('Insert Messenger Successful')
  } else if (response.error) {
    res.send('Insert Messenger Failed')
  }
})

MessengerRouter.patch('/update', (req, res) => {
  const {body} = req;
  console.log(body)
  const response = await updateMessenger();
  if (response.message) {
    res.send('Update Messenger Successful')
  } else if (response.error) {
    res.send('Update Messenger Failed')
  }
})

MessengerRouter.delete('/delete', (req, res) => {
  const {body} = req;
  console.log(body)
  const response = await deleteMessenger();
  if (response.message) {
    res.send('Delete Messenger Successful')
  } else if (response.error) {
    res.send('Delete Messenger Failed')
  }
})

MessengerRouter.get('/', (req, res) => res.send('Messenger Router'))

module.exports = MessengerRouter
