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






// // setTimeout y setInterval

// // setTimeout

// setTimeout( () => {
//   console.log("timer a los 3 segundos")
// }, 3000 ) // 3.  Luego todo lo asincrono
// // 2 argumentos
// // 1. funcion callback a ejecutar.
// // 2. un tiempo en ms que tarda en empezar a ejecutarla.

// setTimeout( () => {
//   console.log("timer despues de 1 segundo")
// }, 1000 ) // 2. Luego todo lo asincrono

// console.log("ejecucion sincrona") // 1. JS ejecuta primero todo lo que sea SINCRONO

// // JS es un lenguaje SINCRONO. (todo se ejecuta en orden y solo continua cuando termina cada operación)
// // PERO tiene comportamientos ASINCRONOS (se ejecutan en diferentes momentos de tiempo)


// // setInterval

// let intervalId = setInterval( () => {
//   console.log("ejecutando intervalo")
// }, 1000 )


// // clearInterval() Detiene un intervalo
// // pasarle el ID del intervalo a detener

// setTimeout( () => {
//   // quiero detenr el intervalo anterior
//   clearInterval(intervalId)
// }, 6000 )


// let counter = 0;
// let id = setInterval( () => {
//   counter++

//   console.log("ejecutando intervalo", counter)

//   if (counter >= 6) {
//     clearInterval(id)
//   }

// }, 1000 )



// OOP


let person = {
  name: "alicia",
  place: "Pais de Las Maravillas",
  friends: ["Sombrerero loco", "Humpty Dumpty", "Liebre de Marzo", "Conejo Blanco", "Gato Chesire"],
  greet() {
    // return "Hola, soy alicia"
    // return `hola, soy ${person.name}`
    // la palabra reservada "this"
    // console.log(this) // console.log nunca afecta la ejecucion
    return `hola, soy ${this.name} de ${this.place}`
  },

  currentSize() {
    // deberia decirnos aleatoriamente si Alicia es pequeña o es Grande.
    let randomNumber = Math.random() * 2 // 0 - 1.999999
    let randomFloor = Math.floor(randomNumber) // 0 o 1
    console.log(randomFloor)
    if (randomFloor === 1) {
      return `${this.name} es grande`
    } else {
      return `${this.name} es pequeña`
    }
    // 50% => "Alicia es grande"
    // 50% => "Alicia es pequeña"
  },

  felizNoCumpleaños() {
    // le desee feliz no cumpleaños a un amigos de Alicia aleatorio
    let randomNumber = Math.random() * this.friends.length
    let randomFloor = Math.floor(randomNumber) // 0 y 4
    console.log(randomFloor)

    let randomFriend = this.friends[randomFloor]
    return `Feliz Feliz no cumpleaños a ${randomFriend}`

  }

}

console.log( person.name )
console.log( person.friends[0] )

console.log( person.greet() )

person.name = "Alicia";

console.log(person.name)
console.log( person.greet() )
console.log( person.currentSize() )
console.log( person.felizNoCumpleaños() )


// let user = person;



