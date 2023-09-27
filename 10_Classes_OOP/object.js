function  mulby5 (num1){
    return num1*5

}
mulby5.power = 2

console.log(mulby5);
console.log(mulby5.power);
console.log(mulby5.prototype);

function createUser(username , score ){
    this.username = username;
    this.score = score;

}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = ()=>{
    console.log(`Score is ${this.score}`);
}
const chai = new createUser("CHAI",25)
const tea = new createUser("TEA",205)

chai.printMe()
