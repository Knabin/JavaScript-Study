// function expression
let sayHi = function() {
    alert("Hello");
};

alert(sayHi);   // 함수 코드가 보인다.

let func = sayHi;   // 함수를 복사한다.

func();     // 복사한 함수를 실행한다.
sayHi();    // 원래 함수도 정상적으로 실행된다.


// callback function
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function showOk() {
    alert("동의하셨습니다.");
}

function showCancel() {
    alert("취소 버튼을 누르셨습니다.");
}

ask("동의하시겠습니까?", showOk, showCancel);

ask("동의하시겠습니까?",
    function() { alert("동의하셨습니다."); },
    function() { alert("취소 버튼을 누르셨습니다."); }
);


// function expression vs function declaration
function sum(a, b) {
    return a + b;
}

let sum = function(a, b) {
    return a + b;
}


// 함수 선언문
sayHi("John");      // Hello, John

function sayHi(name) {
    alert(`Hello, ${name}`);
}

// 함수 표현식
sayHi("John");      // error!

let sayHi = function(name) {
    alert(`Hello, ${name}`);
}


let age = prompt("나이를 알려 주세요.", 18);

if (age < 18) {
    function welcome() {
        alert("안녕!");
    }
} else {
    function welcome() {
        alert("안녕하세요!");
    }
}

welcome();  // Error: welcome is not defined


let age = 16;

if (age < 18) {
    welcome();      // OK

    function welcome() {
        alert("안녕!");
    }

    welcome();      // OK
} else {
    function welcome() {
        alert("안녕하세요!");
    }
}

welcome();  // Error: welcome is not defined


let age = prompt("나이를 알려 주세요.", 18);

let welcome;

if (age < 18) {
    welcome = function() {
        alert("안녕!");
    };
} else {
    welcome = function() {
        alert("안녕하세요!");
    }
}

welcome();  // OK!!


let age = prompt("나이를 알려 주세요.", 18);

let welcome = (age < 18) ?
    function() { alert("안녕!"); } :
    function() { alert("안녕하세요!"); };

welcome();