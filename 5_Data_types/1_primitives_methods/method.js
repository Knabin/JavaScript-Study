// methods of primitives
let john = {
    name: "John",
    sayHi: function() {
        alert("Hi buddy!");
    }
};

john.sayHi();       // Hi buddy!


// a primitive as an object
let str = "Hello"
alert(str.toUpperCase());   // HELLO


let n = 1.23456;
alert(n.toFixed(2));    // 1.23


// constructors String/Number/Boolean are for internal use only
alert(typeof 0);    // "number"
alert(typeof new Number(0));    // "object"!!

let zero = new Number(0);

if (zero) { // 변수 zero는 객체이므로, 조건문은 참이 된다.
    alert("여러분은 zero가 참이라는 것에 동의하시나요?!");
}


let num = Number("123");    // 문자열 -> 숫자


// null/undefined have no methods
alert(null.test);   // error!