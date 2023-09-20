/* There are two ways to declare an object . 1) as a literal , 2) as an constructor */

// singleton ( when we declare obj as constructor singleton is created) ** NOTE : not in case of literal 

//Object.create (This is constructor method)

// Obj  literals

const m1 = Symbol("k1")


const obj = {
    name :"Shivam",
    age : 17,
    [m1]:"k1", // this is the way of declaring a symbol in an object by using ***  [] *** this type of brackets. 
    email  : "Shiv@abc.com",
    isLoggedin : false,
    lastlogindays : ["Friday","Sunday"]
}

// How to access an object   (console.log (object name . which part  you want to print)) Or other way is (console.log( object name[" which part you want to print"]{inverted commas are used to access that part as a string }))

//console.log(obj.name);
//console.log(obj["age"]);
//console.log(typeof obj[m1]);



obj.email = "Shivi@yahoo.com"
// Object.freeze(obj)

//console.log(obj);


// How to add function 

obj.greeting =  function(){
    console.log("Hey");
}

console.log(obj.greeting())

obj.greeting1 =  function(){
    console.log('Hey , ${this.name}');
}

console.log(obj.greeting1())



