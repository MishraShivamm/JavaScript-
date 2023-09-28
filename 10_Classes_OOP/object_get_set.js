// Object based getter and setter

const obj= {
    _email :"123@abc.com",
    _password:"abcc",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value

    }
}

const tea = Object.create(obj)
console.log(tea.email);