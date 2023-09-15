/* 
  **Primitive**(call by value)
7 types: String, Numbers, Boolean, Null, undefined, Symbol, BigInt . 


  **Reference** (Non-primite(call by reference))

3 types : Arrays, Objects, Functions 


JavaScript is a Synchronous single threaded language. 

*/

const id = Symbol("123")
const id2 = Symbol("123")

//console.log(id === id2);

const heros = ["Ironman","Batman","CA"]; // array

let dataobj={
  name :"Shivam",
  age: "22"
}

const myfun = function x(){
  console.log("Namaste");
}

