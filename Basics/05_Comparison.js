//console.log("2" > 1);
//console.log("02" > 1);



console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);// null got converted to zero

console.log(undefined == 0); // undefined is always zero when compared to zero
// avoid this type of comparison
/*

The reason is that an equality check == and comparisons ><>=
<= works differently.
Comparisons convert null to a number ,treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.

*/

// === strict check
console.log("2" === 2);
console.log("2" == 2);