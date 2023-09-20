//Object constructor , singleton

/* const user = new Object()
const user = {}

output of the both above object are same but the difference is first one is constructor type and 2nd one is literal type.
*/

const user = {}
user.id = "123"
user.name = "Shivi"

const regular_user = {
    email:"Shiv@abc.com",
    fullname: {
        userfullname : {
            firstname :"Shivam",
            lastname:  "Mishra"
        }
    }
}

//console.log(regular_user.fullname?.userfullname);

// there's a thing called Optional chaining 


// merge objects

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = {...obj1,...obj2}  // or other way is 
//const obj4 = Object.assign(obj1,obj2)
//console.log(obj3);
//console.log(obj3 === obj1);

//console.log(Object.keys(user));
//console.log(Object.values(user));
//console.log(Object.entries(user));
//console.log(user.hasOwnProperty('id'));



// Obj de-structure

const course = {
    coursename : " Javascript",
    price :"1000",
    courseteacher : "Shivam"
}

const {price} = course // This is called object de structure
console.log(price);


// ******* API********

 JSON 
{
    "name":"shivam",
    "course" :" JacaScript",
    "price" :"Free"
} 

sometimes we get API in form of array too 
[
    {},
    {},
    {}
]
