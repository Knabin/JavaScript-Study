// constructor function
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);       // Jack
alert(user.isAdmin);    // false


function User(name) {
    // this = {};       // 빈 객체가 암시적으로 만들어진다.

    // 새로운 프로퍼티를 this에 추가한다.
    this.name = name;
    this.isAdmin = false;

    // return this;     // this가 암시적으로 반환된다.
}


let user = new function() {
    this.name = "John";
    this.isAdmin = false;

    // 다양한 코드 작성
}


// constructor mode test: new.target
function User() {
    alert(new.target);
}

// new 없이 호출
User();     // undefined

// new 붙여서 호출
new User(); // function User { ... }


function User(name) {
    if(!new.target) {       // new 없이 호출해도
        return new User(name);  // new를 붙여 준다.
    }

    this.name = name;
}

let john = User("John");    // 내부에서 new User("John")으로 처리한다.
alert(john.name);   // John


// return from constructors
function BigUser() {
    this.name = "John";

    return { name: "Godzilla" };    // 새로운 객체 반환
}

alert(new BigUser().name);  // Godzilla


function SmallUser() {
    this.name = "John";

    return; // this 반환
}

alert(new SmallUser().name);    // John


let user = new User;    // 괄호가 없지만
let user = new User();  // 동일하게 동작한다.


// methods in constructor
function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert("My name is: " + this.name);
    };
}

let john = new User("John");

john.sayHi();   // My name is: John