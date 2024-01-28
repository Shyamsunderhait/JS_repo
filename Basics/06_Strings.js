const name = "shyamsunderhait"
const repoCount = 49

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shyam-sunder-hait');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "     shyam sunder hait  "
console.log(newStringOne);
console.log(newStringOne.trim()); 

const url = "https://google.com"


console.log(url.replace('google','instagram'));

console.log(url.includes('www'));

console.log(gameName.split('-')); // creates an array based on condition like -










