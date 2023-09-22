const program =[" js" , "cpp","rb","swift"]
/*
const values = program.forEach( (item) => {
  //console.log(item);
    return item
})

console.log(values); */


const nums = [ 1,3,2,4,5,6,7,8]

/*
const num1 = nums.filter((num)=> {
    return num>3
} )

console.log(num1);


const num1 = []

nums.forEach((num1) => {
    if(num1>3){
        nums.push(num1)
    }
})
console.log(nums);
*/

const books = [
    { title : "ABC", genre: "Fantasy", publish :2004},
    { title : "ABC", genre: "History", publish :2003},
    { title : "ABC", genre: "Science", publish :2002},
    { title : "ABC", genre: "Education", publish :2001},
    { title : "ABC", genre: "Sci-fi", publish :2000},
    { title : "ABC", genre: "COmedy", publish :2004},
    { title : "ABC", genre: "Horror", publish :2003},
    { title : "ABC", genre: "Family", publish :2002},
    { title : "ABC", genre: "History", publish :2001},
    { title : "ABC", genre: "History", publish :2000}

]

const book1 = books.filter( (bk) => {
    return bk.publish > 2002 && bk.genre ==="History"})
const book2 = books.filter( (bk) => bk.genre === "History")
console.log(book1);
console.log(book2);