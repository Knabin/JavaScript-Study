// ToPrimitive
// "string"
alert(obj);     // 객체를 출력할 때
anotherObj[obj] = 123;  // 객체를 프로퍼티 key로 사용할 때


// "number"
let num = Number(obj);  // 명시적 형 변환

// 수학 연산
let n = +obj;
let delta = date1 - date2;
let grater = user1 > user2;


// "defalut"
let total = obj1 + obj2;    // 이항 덧셈 연산 -> default
if (user == 1) {};          // obj == number -> default


// Symbol.toPrimitive
obj[Symbol.toPrimitive] = function(hint) {
    // 반드시 원시값을 반환해야 한다.
    // hint는 "string", "number", "default" 중 하나가 될 수 있다.
}

let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
}
alert(user);        // hint: string -> {name: John}
alert(+user);       // hint: number -> 1000
alert(user + 500);  // hint: default -> 1500


// toString, valueOf
let user = {name: "John"};
alert(user);    // [object Object]
alert(user.valueOf() === user)  // true;


let user = {
    name: "John",
    money: 1000,

    // hint가 string인 경우
    toString() {
        return `{name: "${this.name}"}`;
    },

    // hint가 number나 default인 경우
    valueOf() {
        return this.money;
    }
};

alert(user);    // toString -> {name: "John"}
alert(+user);   // valueOf -> 1000
alert(user + 500);  // valueOf -> 1500


let user = {
    name: "John",

    toString() {
        return this.name;
    }
};

alert(user);        // toString -> John
alert(user + 500);  // toString -> John500


// further conversions
let obj = {
    // 다른 메서드가 없으면 toString에서 모든 형 변환을 처리한다.
    toString() {
        return "2";
    }
};

alert(obj * 2); // 4, 객체가 문자열 "2"로 바뀌고, 곱셈 연산 과정에서 "2"가 숫자 2로 바뀐다.
alert(obj + 2); // 22("2" + 2), 이항 덧셈 연산은 문자열을 연결한다.