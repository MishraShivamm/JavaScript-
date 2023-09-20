const heros = ["BAtman","Ironman"]
const h2 = ["flash","Wonder Woman"]

//heros.push(h2)
//console.log(heros);


//const allheros = heros.concat(h2)
//console.log(allheros);

const h3 = [...heros,...h2]// spread 
//console.log(h3); 

const h4 = [ 1,2,3,[4,5,6],7,[8,9,[3,4]]]

const real_h4= h4.flat(Infinity)

console.log(real_h4);

console.log(Array.isArray("Shivam")); // output will be false because it's not an array
console.log(Array.from("Shivam"));
console.log(Array.from({name:"Shivam"})); // interesting

let n1 = 10
let n2 = 20
let n3 = 30

console.log(Array.of(n1,n2,n3));



