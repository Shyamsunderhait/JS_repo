//======= FUNCTION
function rajivtalar(a,b) {
    b(a)
}
rajivtalar(99999,(para)=>{
    console.log(`price for nigga1 is = `+ para + 1);
})

let arrow = (num)=>{
  console.log(num * 10000);
}
arrow(5);


//======= OBJECT
let jackson = {
    name:"Raju rastogi",
    id:8282,
    collegeYear:2023
}
let micheal = jackson

console.log(micheal.collegeYear=1999);
console.log(Object.keys(micheal));
console.log(Object.values(micheal));
console.log(Object.entries(micheal));


// ======= ARAY ======

let sal = [2000,5000,4000,6000,4,56,7,3]
sal.push(9000)
sal.push(6000)
sal.pop()
sal.shift();
sal.unshift(3400)
console.log(sal);

let slips = sal.map((sal)=>{
    return sal * 5;
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


