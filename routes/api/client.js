const ClientRouter = require('express').Router()
const {insertClient, updateClient, deleteClient} = require('../../controllers/client')

ClientRouter.post('/insert', (req, res) => {
  const {body} = req;
  console.log(body)
  // const response = await insertClient();
  res.send('Insert Client Successful') 
})

ClientRouter.patch('/update', (req, res) => {
  const {body} = req;
  console.log(body)
  // const response = await updateClient();
  res.send('Update Client Successful') 
})

ClientRouter.delete('/delete', (req, res) => {
  const {body} = req;
  console.log(body)
  // const response = await deleteClient();
  res.send('Delete Client Successful') 
})

ClientRouter.get('/', (req, res) => res.send('Client Router'))

module.exports = ClientRouter
