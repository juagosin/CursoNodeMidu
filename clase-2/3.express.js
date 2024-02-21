const express = require('express')
const ditto = require('./pokemon/ditto.json')
const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use((req, res, next) => {
  console.log('mi primer middleware')
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()
  // solo llegan las request que son POST y que tienen el header Content-type: application/sjon
  let body = ''
  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la informaci´n en el req.body
    req.body = data
    next()
  })
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // Deberiamos guardar en bbdd
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
