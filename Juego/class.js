

class Usuario{
    constructor(login,password) {
        this.login = login;
        this.password = password;
    }
    retornaLogin() {
        console.log(this.login);
        
    }
    get getPassword() {
        return this.password;
    }

    /**
     * @param {any} value
     */
    set setPassword(value) {
        this.password = value;
    }
}

var user = new Usuario('Cesar', 'Pass');

console.log(user);

