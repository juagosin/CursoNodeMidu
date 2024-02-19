const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  console.log('request received: ', req.url)
  res.end('Hola mundo')
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`servidor escuchando en el puerto http://localhost:${desiredPort}`)
})
