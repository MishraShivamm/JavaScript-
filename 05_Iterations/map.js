const nums = [ 1,2,3,4,5,6,7]

//const n = nums.map( (n1) => n1 + 10 )

const n1 = nums.map((num) => num * 10).map((num) => num +1 ).filter((num) => num >30)
console.log(n1);
