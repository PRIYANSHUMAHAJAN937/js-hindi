// Ther are two types of datatypes primitive and non-primitive
// on the basis of howw the data is stored and accessed

// primitive   

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId)//false
//Non primitive or reference type

//Array, Objects, Functions
const heroes=["thor","ironman","hulk"] //array

let myobj = {//object 
    name: "Priyanshu",
    age: 20
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof heroes) //oject
console.log(typeof myobj)//object
console.log(typeof myFunction)//function