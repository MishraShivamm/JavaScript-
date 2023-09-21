// FOr of 

/* const array = [1,2,3,4,5]

for (const arr of array) {
    console.log(arr);
    
} */

/*const array = "hello world"
for (const arr of array) {
    console.log(arr);
    
} */

// Maps
const map =  new Map()
map.set(" IN","INDIA")
map.set(" UK","United Kingdom")
map.set(" FR","France")

console.log(map);

for (const [key,value] of map) {
    console.log(key), " - ", value;
    
}

const obj = {
    "g1": "Volley",
    "g2" :"PUBG"
}
//for (const [key , value] of obj) {
//    console.log(key , "- ", value);
//}