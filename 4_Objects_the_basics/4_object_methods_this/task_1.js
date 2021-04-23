function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

alert(user.ref.name);   // John? return 되는 객체가 this일 것 같다...?


function makeUser() {
    return this;    // 객체 리터럴 X
}

alert(makeUser().name); // Error: Cannot read property 'name' of undefined


function makeUser() {
    return {
        name: "John",
        ref() { // user.ref()가 메서드가 되고, this는 . 앞의 객체라서 에러가 발생하지 않는다.
            return this;
        }
    };
};

let user = makeUser();

alert(user.ref().name);