// ==== Practical 1
let person = {
    name:"Shashikant",
    age:21,
    gender:undefined
}
console.log(person.name);

// ==== Arrow

let arrow = (num)=>{
    return num*num;
}
console.log(arrow(5));

// === anonymous 
let a = [2,45,6,4,3,2]
let multiplyByTwo = function(a) {
    return a.map((a)=>{
        return a*2;
    })
}
console.log(multiplyByTwo(a));


let num = [50,60,70,4,23,5,8,9,43,23]

function filterEvenNumbers(num) {
     return num.filter((num)=>{
         return num % 2==0;
     });
 }


console.log(filterEvenNumbers(num));

// ==== Arrays
let sal = [2000,5000,4000,6000,4,56,7,3]

let slips = sal.map((sal)=>{
    return sal * sal;
})
console.log(slips);


let fil = sal.filter((sal)=>{
    return sal %2 == 0;
})
console.log(fil);

let totalSalary = sal.reduce((sal, total)=>{
    return sal = total + sal;
})
console.log(`so the total salary of bombing department is ${totalSalary}Rs`);
