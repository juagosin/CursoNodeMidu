/* Esto solo en los módulos nativos que no tienen promesas nativas

const { promisify } = require ( 'node:util')
const readFilePromise = promisify(fs.readFile)
*/
import { readFile } from  'node:fs/promises';

//IIFE - Inmediatly Invoked Function Expression

async function init(){
    console.log('Leyendo el primer archivo....')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('Primer texto: ', text)
    
    console.log('-->Hacer cosas mientras lee el archivo...')
    
    console.log('Leyendo el segundo archivo....')
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto: ', secondText)

}

init()
/* 
(
    async ()=>{
        console.log('Leyendo el primer archivo....')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('Primer texto: ', text)
        
        console.log('-->Hacer cosas mientras lee el archivo...')
        
        console.log('Leyendo el segundo archivo....')
        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo texto: ', secondText)
    })(
    
) */


