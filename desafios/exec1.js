class User {

    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return (this.admin === true ) ? true: false;
    }
}

class Admin extends User {

    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }

}

const user1 = new User('igor@teste.com', '1234');
const admin1 =  new Admin('igor@teste.com', '1234');

console.log(user1.isAdmin());
console.log(admin1.isAdmin());