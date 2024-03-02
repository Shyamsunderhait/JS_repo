// When objects are made through constructor that is called singleton that is only object without any multiple instances

//Object literals1

const sym = Symbol('key1');

let ob = {
    name:'Shyam',
    age:22,
    [sym]:'mySymbol',
    "fullname":"Shyamsunder Hait",
    email:'shyamsunderhait@gmail.com',
    address:'Mumbai'
}
ob.email = 'sammyjones@gmail.com'
//Object.freeze(ob);
ob.email = 'sam@gmail.com'
console.log(ob.fullname);
console.log(ob["fullname"]);
console.log(ob[sym]);
//console.log(ob);
ob.greetings = function(){
    console.log("Heyy shyam");
}
ob.greetingsTwo = function(){
    console.log(`Heyy , ${this.name}`);
}


console.log(ob.greetings());
console.log(ob.greetingsTwo());




