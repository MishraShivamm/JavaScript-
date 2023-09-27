//Object literal

const user = {
    // properties
    username:"Shivam",
    logInCount: 8,
    signedIn: true,
    getUserDetails : ()=>{
        //console.log("GOt User Details for database");
        //console.log(`Username: ${username});  this will show error as we have not defined the username to run this correctly we have to use this keyword
        //console.log(this);
    }

}
///console.log(user.getUserDetails());
//console.log(user.username);
//console.log(this);


/*
const promiseOne = new Promise()
const date = new Date()
*/

function User(username,logInCount,signedIn) {
     this.username = username; // Left hand side keyword is variable and right hand side is what we pass 
     this.logInCount = logInCount;
     this.signedIn = signedIn
// we can also write methods for example
     this.greeting = ()=>{
        console.log(`Welcome ${this.username}`);
     }
     return this
    
}
const User1 = new User("SHIVAM", 12, true)
const User2 = new User("CHAI OR CODE",11,false)
console.log(User1.constructor);
//console.log(User2);


/*As soon as we use new keyword , 
an empty object is created which is called INSTANCE . 
2) A constructor functionn is called , which is responsible for wrapping up of arguments and giveing it back 
3)  whatever arguents we've written get injected in "this" keyword .
4) We get it back in function
*/