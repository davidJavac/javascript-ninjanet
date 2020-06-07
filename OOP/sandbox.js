/*class User{
    
    constructor(username, email){

        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login(){

        console.log(`${this.username} just logged in`);
    }
    logout(){
        
        console.log(`${this.username} just logged out`);

    }

    incScore(){

        this.score++;
    }
}

class Admin extends User{

    constructor(username, email, title){

        super(username, email);

        this.title = title;
    }

    deleteUser(user){

        users = users.filter(u => u.username !== user.username);
    }
}*/

//function constructor

function User(username, email){
    
    this.username = username;
    this.email = email;
}

function Admin(username, email, title){
    
    User.call(this, username, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user){
    
    users = users.filter(u => u.username !== user.username);

    
}

User.prototype.login = function(){
    
    console.log(`${this.username} logged in`);
};

User.prototype.logout = function(){

    console.log(`${this.username} logged out`);
};

let userOne = new User('fernandez', 'fernandez@gmail.com');
let userTwo = new User('lanson', 'emily@gmail.com');
let userAdmin = new Admin('abramovich', 'david.abramovich84@gmail.com', 'the developer');

/*let users = [userOne, userTwo];
userAdmin.deleteUser(userOne);
console.log('admin', userAdmin);
console.log(users);*/

let users = [userOne, userTwo];
console.log(users);
console.log(userOne);
console.log(userAdmin);
