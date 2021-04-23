// method examples
let user = {
    name: "John",
    age: 30
}

user.sayHi = function() {
    alert("안녕하세요!");
}

user.sayHi();   // 안녕하세요!


function sayHello() {
    alert("Hello!");
}

user.sayHi = sayHello;

user.sayHi();   // Hello!


// method shorthand
// 두 객체는 동일하게 동작한다.
user = {
    sayHi: function() {
        alert("Hello");
    }
}

user = {
    sayHi() {
        alert("Hello");
    }
}


// "this" in methods
let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(this.name);
    }
};

user.sayHi();   // John


let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name);   // 'this' 대신 'user' 사용 가능하다.
    }
};


let admin = user;
user = null;

admin.sayHi();      // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생한다.


// "this" is not bound
function sayHi() {
    alert(this.name);
}


let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert(this.name);
}

user.f = sayHi();
admin.f = sayHi();

user.f();   // John
admin.f();  // Admin

admin['f']();   // Admin, .와 []는 동일하게 동작한다.

// calling without an object: this == undefined
function sayHi() {
    alert(this);
}

sayHi();    // undefined


// arrow functions have no "this"
let user = {
    firstName: "John",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi();   // John