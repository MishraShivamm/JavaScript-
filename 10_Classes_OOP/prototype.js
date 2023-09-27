/*let myname = "SHIVAM    "
let surname= "Mishra  "

console.log(myname.truelength()); */


let myhero =["thor","Hulk"]

let myobj ={
    thor: "hammer",
    Hulk: "Anger",

    getHulkpower:()=>{
        console.log(`Hulk power is ${this.Hulk}`);
    }
}


Object.prototype.shivam = ()=>{
    console.log("shivam is present in all object");
}

//myobj.shivam()
Array.prototype.mishra = ()=>{
    console.log("Hello");
}
//myhero.shivam()
//myhero.mishra()
//myobj.mishra()

// INHERITANCE

const User ={
    username:"shivam",
    email:"shivam@Google.com"
}

const teahcer = {
    makeVedio: true
}

const Support = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "JS Assignment",
    fulllTime: true,
    __proto__ :Support
}

teahcer.__proto__ = User


// moder syntax 

Object.setPrototypeOf(TAsupport , User)

let anotherUser = "Mishraaaa                                  "

String.prototype.truelength = ()=>{
    //console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
}

anotherUser.truelength()
"shivam".truelength()
"mishra".truelength()