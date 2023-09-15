console.log("2"> 1);
// Output will be true because JS will automatically convert string in number to comapre both of them .

console.log(null > 0);// false
console.log(null == 0);//false
console.log(null >=0);// true "REASON => Is that an equality check == and comparisons >,<,>=,<= work differently . Comparisons convert null to number , treating it as 0 . That's why null >=0 is true and null > 0 is false."

console.log(undefined == 0);//false

// === checks the value and data type also.


// NOTE : Value the clean code writing and avoid these kind of comparisons.
