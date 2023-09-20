
function name() {
    console.log("S");
    console.log("h");
    console.log("i");
    console.log("v");
}

//function sum(n1 ,n2) {
//    console.log(n1+n2);
//}

function sum(n1 ,n2) {
    //let num = n1 + n2
    //return num 
    return n1+n2 
    console.log("Shivam"); // this line won't be printed because this is  after return and whenever we write something after result it doesn't get printed
}
const num = sum(4,3)
//console.log(num );

function loginMessage(user= "Shivam"){
    if(!user){
        console.log("Enter name");
        return 
    }
    return '${"user"} logged in recently'
}
console.log(loginMessage());