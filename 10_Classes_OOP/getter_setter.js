class User{
    constructor (email, password){
        this.email = email;
        this.password = password
    }
    get email (){
        return this._email.toUpperCase()
    }
    set email (value){
        this._email = value
    }
    get  password(){
        return `${this._password}Shivam`//this._password.toUpperCase()
    }
    set password(value){
        this._password = value

    }
}

const Shivam = new User("Shivam@Meta.com","abc")
console.log(Shivam.password);
console.log(Shivam.email);