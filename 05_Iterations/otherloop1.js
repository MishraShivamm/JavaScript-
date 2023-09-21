const obj = {
    js : "JavaScript",
    cpp : "C++",
    rb :"ruby",
}
for (const key in obj) {
    //console.log(key ,"full form is :",obj[key]);
}

const program = ["js","cpp","Rb"]
for (const key in program) {
    console.log(program[key]);
}


const map = new Map()

map.set("In","INDIA")
for (const key in map) {
    console.log(key);
} // It won't be printed as it's not iteratable 