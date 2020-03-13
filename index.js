const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3000
process.env.NODE_ENV = process.env.NODE_ENV == undefined ? 'development' : process.env.NODE_ENV 

process.on('uncaughtException', (e) => console.error('Process Unhandled Error', e))
process.on('unhandledRejection', (e) => console.error('Process Unhandled Rejection', e))

app.use(morgan('common'))

app.use(bodyParser.json())

 app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  console.log(`Running server in ${process.env.NODE_ENV} mode`)
  console.log(`Server listening on 127.0.0.1:${port}`)
})

