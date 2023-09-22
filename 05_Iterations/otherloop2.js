const program =[" js" , "cpp","rb","swift"]

//program.forEach(  function (item) {
//    console.log(item);
//})


//program.forEach( (val) => {
//    console.log(val);
//}) 

/*
function printv(item) {
    console.log(item);
    
}

program.forEach(printv)


program.forEach((item ,  index , arr) => {
    console.log(item , index , arr );
})

*/

const code = [ {
    language : " JavaScript",
    file : "ES6"
},
{
    language : " Java",
    file : "JVM"
},
{
    language : " cPP",
    file : "c++"
}
]

code.forEach( (item ,  index , arr) => {
    console.log(item.language , index , arr);

})