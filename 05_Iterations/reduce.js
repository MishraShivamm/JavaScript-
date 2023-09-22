//Reduce function takes all the value from an array and return a single output 

const array = [ 2,3,5,6,7]

const sum = 0

const ans = array.reduce((n1 , n2) => n1+n2,sum)

console.log(ans); 

const cart = [
    {
        item :"Js cbootcamp",
        price :2999
    },
    {
        item :"DSa cbootcamp",
        price :4999
    },
    {
        item :"Data Science cbootcamp",
        price :6999
    },
    {
        item :"JAnalyst cbootcamp",
        price :2999
    }
]

const nw = cart.reduce( (acc ,item) => acc + item.price , 0 )
console.log(nw); 

