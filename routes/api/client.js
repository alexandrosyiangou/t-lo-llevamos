const ClientRouter = require('express').Router()
const {insertClient, updateClient, deleteClient} = require('../../controllers/client')

ClientRouter.post('/insert', async (req, res) => {
  const {body} = req;
  console.log(body)
  const response = await insertClient();
  if (response.message) {
    res.send('Insert Client Successful')
  } else if (response.error) {
    res.send('Insert Client Failed')
  }
})

ClientRouter.patch('/update', async (req, res) => {
  const {body} = req;
  console.log(body)
  const response = await updateClient();
  if (response.message) {
    res.send('Update Client Successful')
  } else if (response.error) {
    res.send('Update Client Failed')
  }
})

ClientRouter.delete('/delete', async (req, res) => {
  const {body} = req;
  console.log(body)
  const response = await deleteClient();
  if (response.message) {
    res.send('Delete Client Successful')
  } else if (response.error) {
    res.send('Delete Client Failed')
  }
})

ClientRouter.get('/', (req, res) => res.send('Client Router'))

module.exports = ClientRouter
