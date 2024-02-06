const fs = require('node:fs') // a partir de Node 16, se recomienda poner node:

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // si es fichero
    stats.isDirectory(), // si es directorio
    stats.isSymbolicLink(), // si es un enlace simbólico
    stats.size, // tamaño en bytes
)