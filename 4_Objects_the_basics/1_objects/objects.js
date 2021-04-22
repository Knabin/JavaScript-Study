// object
let user = new Object();    // '객체 생성자' 문법
let user = {};      // '객체 리터럴' 문법


// literals and properties
let user = {        // object
    name: "John",   // key: "name", value: "John"
    age: 30         // key: "age", value: 30
};


// dot notation
alert(user.name);   // John
alert(user.age);    // 30

user.isAdmin = true;
delete user.age;        // delete property

let user = {
    name: "John",
    age: 30,
    "likes birds": true,
};


// const object
const user = {
    name: "John"
};

user.name = "Pete";
alert(user.name);   // Pete


// square brackets
//user.likes birds = true   // syntax error!

let user ={};
user["likes birds"] = true;
alert(user["likes birds"]); // true
delete user["likes birds"];

let key = "likes birds";
user[key] = true;   // == user["likes birds"] = true


let user = {
    name: "John",
    age: 30
};

let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");
alert(user[key]);

let key = "name";
alert(user.key);    // ?? undefined


// computed property
let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag = {
    [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아온다.
};

alert(bag.apple);


let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag = {};

bag[fruit] = 5;


let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5,   // bag.appleComputers = 5
};


// property value shorthand
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // etc...
    };
}

let user = makeUser("John", 30);
alert(user.name);   // John


function makeUser(name, age) {
    return {
        name,
        age,
    };
}

let user = {
    name,
    age = 30
};


// property names limitations
let obj = {
    for: 1,
    let: 2,
    return: 3
};

alert(obj.for + obj.let + obj.return);  // 6


let obj = {
    0: "test",  // == "0": "test"
}

alert(obj["0"]);    // test
alert(obj[0]);      // test


let obj = {};
obj.__proto__ = 5;
alert(obj.__proto__);   // [object Object]


// property existence test, "in" operator
let user = {};
alert(user.noSuchProperty === undefined);   // true == no such property


"key" in object

let user = { name: "John", age: 30 };
alert("age" in user);       // true
alert("blabla" in user);    // false


let user = { age: 30 };
let key = "age";
alert(key in user);     // true


let obj = {
    test: undefined
};

alert(obj.test);        // undefined
alert("test" in obj);   // true


// the "for...in" loop
for (key in object) {
    // ...
}

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    alert(key);     // name, age, isAdmin
    alert(user[key]);   // John, 30, true
}


// ordered like an object
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..
    "1": "USA"
}

for (let code in codes) {
    alert(code);    // 1, 41, 44, 49
}

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..
    "1": "USA"
}

for (let code in codes) {
    alert(+code);   // 49, 41, 44, 1
}