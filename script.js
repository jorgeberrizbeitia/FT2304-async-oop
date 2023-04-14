console.log("probando")


function sayHello(name) {
  // ... multiples logics
  console.log(`hola ${name}`)
} // ref. 1234

// sayHello("Caro")


function functionQueAceptaOtraFuncion( unaFuncion ) {
  // let unaFuncion = sayHello // ref. 1234

  // unaFuncion es una funcion de

  // console.log(unaFuncion)
  console.log("Ejecucion de segunda funcion")
  // ... multiples logicas
  unaFuncion("Ruth")
}

functionQueAceptaOtraFuncion( sayHello )

// Callback
// - Una funcion que es pasada como argumento a otra funcion.
// - O una funcion que returna otra funcion


// por que aprendemos callbacks

// 1. Existen muchos metodos en JS que usan el concepto de callbacks para su ejecución.
// 2. Podemos mejorar la optimización del codigo usando logicas complejas con callbacks.


let array = [2, 3, 6, 22, 10, "string"];

// function printPatata(algo) {
//   // ...
//   console.log(algo)
//   console.log("patata")
// }

array.forEach( (algo) => {
  console.log(algo)
  console.log("patata")
} )

// lean del metodo forEach y practique durante el finde.






// setTimeout y setInterval

// setTimeout

setTimeout( () => {
  console.log("timer a los 3 segundos")
}, 3000 ) // 3.  Luego todo lo asincrono
// 2 argumentos
// 1. funcion callback a ejecutar.
// 2. un tiempo en ms que tarda en empezar a ejecutarla.

setTimeout( () => {
  console.log("timer despues de 1 segundo")
}, 1000 ) // 2. Luego todo lo asincrono

console.log("ejecucion sincrona") // 1. JS ejecuta primero todo lo que sea SINCRONO

// JS es un lenguaje SINCRONO. (todo se ejecuta en orden y solo continua cuando termina cada operación)
// PERO tiene comportamientos ASINCRONOS (se ejecutan en diferentes momentos de tiempo)


// setInterval

let intervalId = setInterval( () => {
  console.log("ejecutando intervalo")
}, 1000 )


// clearInterval() Detiene un intervalo
// pasarle el ID del intervalo a detener

setTimeout( () => {
  // quiero detenr el intervalo anterior
  clearInterval(intervalId)
}, 6000 )


let counter = 0;
let id = setInterval( () => {
  counter++

  console.log("ejecutando intervalo", counter)

  if (counter >= 6) {
    clearInterval(id)
  }

}, 1000 )

