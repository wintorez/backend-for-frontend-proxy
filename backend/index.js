const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3002

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello from Backend!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
