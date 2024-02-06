const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const desiredPort = process.env.PORT ?? 3000
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(0, () => {
    console.log(`servidor escuchando en el puerto http://localhost:${server.address().port}`)
  })
})
