function SetUsername (username){
    // complex DB calls
    this.username = username

}
function createUSer (username, email,password){
    // complex DB calls
    SetUsername.call(this,username)
    this.email = email
    this.password = password

}


const chai = new createUSer("chai","Chai@fb.com","123")
console.log(chai);
