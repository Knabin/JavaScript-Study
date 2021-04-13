// || OR
result = a || b;

alert(true || true);    // true
alert(false || true);   // true
alert(true || false);   // true
alert(false || false);  // false

if (1 || 0) {       // if (true || false)
    alert('truthy!');
}

let hour = 9;

if (hour < 10 || hour > 18) {
    alert('영업 시간이 아닙니다.');
}

let hour = 12;
let isWeekend = true;

if(hour < 10 || hour > 18 || isWeekend) {
    alert('영업 시간이 아닙니다.');
}


// OR "||" finds the first truthy value
result = value1 || value2 || value3;

1 || 0;     // 1 (1은 truthy)
null || 1;  // 1 (1은 truthy)
null || 0 || 1; // 1
undefined || null || 0; // 0 (모두 falsy이므로, 마지막 값 반환)


// Getting the first truthy value from a list of variables or expressions
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert(firstName || lastName || nickName || "Anonymous");    // SuperCoder


// Short-circuit evaluation
true || alert("not printed");
false || alert("printed");


// && AND
true && true;   // true
false && true;  // false
true && false;  // false
false && false; // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert("현재 시각은 12시 30분입니다.");
}

if (1 && 0) {   // 피연산자가 숫자형이지만 논리형으로 바뀌어 true && false가 된다.
    alert("if문 안에 falsy가 들어가 있기 때문에 alert은 실행되지 않는다.")
}


// AND "&&" finds the first falsy value
result = value1 && value2 && value3;

// 첫 번째 피연산자가 truthy라면, AND는 두 번째 피연산자를 반환한다.
1 && 0;     // 0
1 && 5;     // 5

// 첫 번째 피연산자가 falsy라면, AND는 첫 번째 피연산자를 반환하고, 두 번째는 무시한다.
null && 5;  // null
0 && "아무거나 와도 상관없습니다."; // 0

1 && 2 && null && 3;    // null
1 && 2 && 3;            // 마지막 값, 3


// Don't replace if with || or &&
let x = 1;
(x > 0) && alert('Greater than zero!');
if (x > 0) alert('Greater than zero!');


// NOT "!"
result = !value;

!true;  // false
!0;     // true

!!"non-empty string";   // true
!!null;                 // false

Boolean("non-empty string");    // true
Boolean(null);          // false