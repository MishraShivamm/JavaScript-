//Object related 

const description = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(description);
const m = Math.random(Math.PI *100 + 1)
//console.log(m);
//console.log(Math.PI);

const obj ={
    name :"Chai",
    price: 250,
    isAvailable :true,

    oreder : () =>{
        console.log("Chai bn rhi hai");
    }
}
console.log(Object.getOwnPropertyDescriptor(obj , "name"));


Object.defineProperty(obj,"name",{
  //  writable: false,
    enumerable :false
})
console.log(Object.getOwnPropertyDescriptor(obj , "name"));

for (const [key,value] of Object.entries(obj)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    
}