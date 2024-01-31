//argumentos de entrada
console.log(process.argv)


//controlar el proceso y su salida
//process.exit(1)//0 todo ok, 1

//podemos controlar eventos del proceso
process.on('exit',()=>{
    //limpiar la consola  o recursos
})

//current working directory
console.log(process.cwd())

