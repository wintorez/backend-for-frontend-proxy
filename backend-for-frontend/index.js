const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
const port = 3001

app.use(cors())
app.use(morgan('dev'))

app.use(
  '/proxy',
  createProxyMiddleware({
    target: 'http://localhost:3002',
    pathRewrite: { ['^/proxy']: '' },
  })
)

app.get('/', (req, res) => {
  res.send('Hello from Backend-for-Frontend!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
