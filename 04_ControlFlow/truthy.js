const userEmail = []

//if (userEmail){
//    console.log("GOt EMail");
//} else{
//    console.log("Incorrect");
//}

/* Falsy Values

False ,  0  , -0 , BigInt 0n, "" , null , undefined , NaN 

Truthy values 

" 0 " , 'False' " " , [] , {} ,  function () {} , 


to check array 

if (userEmail.length === 0) {
    console.log("Array is empty");
}  */ 

const obj = {}

if (Object.keys(obj).length){
    console.log("object is empty");
} 

// Nullish Coalescing Operator (??) : null , undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// Terniary Operator 

//condition ?  true : false

const IcePrice = 100

IcePrice <=80 ? console.log("less then 80"): console.log("More then 80");