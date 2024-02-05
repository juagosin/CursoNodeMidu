const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(1234).then(port => {
  server.listen(0, () => {
    console.log(`servidor escuchando en el puerto http://localhost:${server.address().port}`)
  })
})
