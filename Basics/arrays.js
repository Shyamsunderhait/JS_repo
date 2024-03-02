let arr1 = [1,4,5,3,6,7,,3];
let arr2 = [1,2,44,555,6,66,7,777,88];
let allarr = [...arr1,...arr2];// concatinate arrays
console.log(allarr);

let nestedarr = [22,[444,3,3],344,5,33,5,[43,5,7,9,[5,4,3]]];
console.log(nestedarr.flat(Infinity));// flatens all nested arrays


let name = 'Shyam';
let age = 22;
let address = 'Mumbai'

console.log(Array.of(name,age,address)); // Represents elements in array format