const user ={
    username:"Shivam",
    price:199,

    welcomeMessage: function (){
        //console.log('${this.username},welcome to Site');
        //console.log(this);
    }
    
}
//user.welcomeMessage()
//user.username ="Shiv"
//user.welcomeMessage()
//console.log(this);

/*function tea(){
    let username1 = "shivam"
    console.log(this);
}
tea() */


/*const chai = function (){
    let username1 = "Shiv"
    console.log(this.username1);
}
chai() */

const chai = () => {
    let username1 = "Shiv"
    console.log(this);
}
// chai()

// this keyword reffers to the current context



// Syntax of arrow function [ () => { }   ]
// Basic arrow function 
const sum = (n1,n2) => {
    return n1 + n2 
}
console.log(sum(4,5));



// not Basic (Implecite return) 
const sum1 = (n1,n2) => n1 + n2 

const sum2 = (n1,n2) => (n1 + n2) 

const sum3 = (n1,n2) => ({username: "Shivam"}) 

console.log(sum1(4,5));
console.log(sum2(3,3));
console.log(sum3());


//const arr =[2,3,4,5]
 //arr.forEach( ()=> ) will discuss it later 


// for implicit return if we use curly braces we  have to use return keyword , but if we use () these braces we don't have to use return keywoed