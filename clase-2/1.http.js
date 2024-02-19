const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.end('<h1>Mi página</h1>')
  } else if (req.url === '/imagen-super-bonita.png') {
    fs.readFile('./foto.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internarl Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not found
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`servidor escuchando en el puerto http://localhost:${desiredPort}`)
})
// node --watch ./clase-2/1.http.js
// nodemon, dependencia para escuchar los cambios en los ficheros, npm install nodemon -D para instalarlo dependencia de desarrollo
