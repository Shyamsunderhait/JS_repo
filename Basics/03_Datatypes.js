let name = "Shyam"
let age = 18
let loggedIn = true

// number = 2 to power 53
// bigInt
// string
// boolean = true/false
// null = standalone value
// undefined = let name;
// symbol = unique

//object

console.log(typeof age)
console.log(typeof null); //object
console.log(typeof undefined) // undefined

// datatypes basics
// Primitive(call by value)

// 7 types : String, Number, Boolean, Null, 
//Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
console.log(id);

const bigNumber = 465456165846413456n 

// Reference type(non primitive)

// Array, Objects, Functions

const heroes = ["Spiderman", "iron man", "black panther"]
let myObj = {
    name:"shyam",
    age:21
}

const myFunction = function(){
    console.log("shyamsunderhait");
}

console.log(typeof myObj)

