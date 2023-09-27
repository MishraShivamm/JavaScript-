class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`username${this.username}`);
    }

    static createID(){
        return '123'
    }
}

const shivam = new  User("Shivam")
console.log(User.createID());

class Teacher extends User{
    constructor(username,email){
        super(username)

        this.email=email
    }
}

const and = new Teacher("iphone","a@abc.com")
console.log(nd.logMe());