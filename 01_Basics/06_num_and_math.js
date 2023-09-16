const num = 400

const score = new Number(300)
//console.log(score);

console.log(score.toString);
console.log(score.toFixed(3));// output = 300.000


const otherscore = 23.8654
console.log(otherscore.toPrecision(2));


const s1 = 1000000
//console.log(s1.toLocaleString('en-IN'));



// ++++++++++++++++++++++++++++++++++++MATH+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//it's a library which comes default  with JS

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(5.5));
console.log(Math.ceil(5.5));
console.log(Math.floor(5.5));
console.log(Math.min(2,3,5,6,7,8,5));
console.log(Math.max(5,8,7,6));
console.log(Math.random());
console.log((Math.random()*10)+1);
 // To Remember
 const min = 20
 const max = 45

console.log(Math.floor(Math.random() * (max - min + 1) )+ min);




/*
Math.random() always gives valoues between 0 and 1 . 
floor is used to get the lower value ( 4.6 = 4)
ceil is used to get upper value (4.6 = 5)

console.log(Math.floor(Math.random() * (max - min + 1) )+ min);
*/