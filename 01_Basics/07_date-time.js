// DATES

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());


let mycreateddate = new Date("08-17-2023")
console.log(mycreateddate.toLocaleString());


let mytimeStamp = Date.now()

//console.log(mytimeStamp);
//console.log(mycreateddate.getTime());
//console.log(mycreateddate.getSeconds());

let newDate = new Date()

console.log(newDate);
console.log(newDate.getFullYear());




/******************************************************** IMPORTANT **********************************************************************/

newDate.toLocaleString('default',{
    dateStyle: "medium",
     
})




// Revise it one or more time 