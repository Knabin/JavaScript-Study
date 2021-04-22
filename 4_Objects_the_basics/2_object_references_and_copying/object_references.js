// object references and copying
let message = "Hello!";
let phrase = message;

let user = {
    name: "John"
};

let admin = user;

admin.name = "Pete";
alert(user.name);   // Pete


// comparison by reference
let a = {};
let b = a;

alert(a == b);  // true
alert(a === b); // true


let a = {};
let b = {};

alert(a == b);  // false


// cloning and merging
let user = {
    name: "John",
    age: 30
};

let clone = {};

for (let key in user) {
    clone[key] = user[key];
}

clone.name = "Pete";
alert(user.name);   // John

// with Object.assign
Object.assign(dest, [src1, src2, src3]);

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// permissions1과 permission2의 프로퍼티를 user로 복사한다.
Object.assign(user, permissions1, permissions2);


let user = { name: "John" };

Object.assign(user, { name: "Pete" });
alert(user.name);   // Pete


let user = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user);


// nested cloning
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);
alert(user.sizes === clone.sizes);  // true, 같은 객체

user.sizes.width++;         // 50 -> 51
alert(clone.sizes.width);   // 51, sizes를 공유하기 때문에 다른 객체에서도 변경값을 확인할 수 있다.