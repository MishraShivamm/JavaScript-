// Array 
//elements in aaray can be diifferent
const myArr = [2,3,5,6,4]
const array = ["Batman","Ironman"]
const array2 = new Array( 1,4,7,8,)
//console.log(myArr[3]);
//console.log(array[1]);
//console.log(array2);


//Arrya Methods

myArr.push(5)
myArr.pop()
myArr.unshift(4)
myArr.shift()

//console.log(myArr.includes(6));
const newarr = myArr.join()
//console.log(myArr);
//console.log(newarr);



// Slice  , splice

console.log("A", myArr);

const my1 = myArr.slice(2,3)
console.log("b",myArr);

console.log(my1);
const my2 = myArr.splice(2,4)
console.log(my2);
console.log("c",myArr);


