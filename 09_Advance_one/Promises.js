// We build promises . but,In most cases we consume promises rather then building it . 
// this is done in 2 parts
const promiseOne = new Promise ( (resolve,reject)=> {
    // Do an Async( asynchronus ) tasks 
    // DB calls , cryptography , network

    setTimeout( ()=> {
        console.log("Task completed");
        resolve()
    },1000)
}) 


// this is done in one part
promiseOne.then(()=>{
    console.log("Promise Consumed");
})

new Promise ( (resolve,reject)=> {
    setTimeout (()=>{
        console.log("Task 2 Completed");
        resolve()
    },1000)
}).then(()=>{
    console.log(" 2 resolved");
})

// this is 3rd type of promise 
const promiseThree = new Promise ((resolve,reject) =>{
    setTimeout(() => {
        resolve({username:"Shiam" , email: "mishrashiv1708@gmail.com"}) 
    }, 1000);
}) /*in this one we can print the data in resolve by giving parameter to the call back function (i.e. .then (()=> {})) or
 use can declare the promise as a variable and print the variable directly in call back function */
promiseThree.then(()=>{
    console.log(promiseThree);

})

// Fourth promise

const promiseFour = new Promise ((resolve , reject)=>{
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"Shivam" , password: "12345678910"})
        } else{
            reject('ERROR 404 ')
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{console.log("finally the promise is either ressolved or rejected");})

// fifth promise , other way (asyn , await)

const  promiseFive = new Promise ( (resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"JavaScript" , password: "1234"})
        } else{
            reject('JavaScript not Working ')
        }
    }, 1000);
})

async function consumePromiseFive() {
   try{
    const response = await promiseFive
    console.log(response);
   }
    
   catch(error){
    console.log(error);
   }
}
consumePromiseFive()

/* async function getallusers(){
   try{
    const reps = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await reps.json()
   console.log(data);
   }
   catch(error){
    console.log("error",error);
   }
}
getallusers() */

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

