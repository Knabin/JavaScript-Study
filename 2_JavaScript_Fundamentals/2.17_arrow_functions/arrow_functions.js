// arrow functions
let func = (arg1, arg2, ...argN) => expression

let func = function(arg1, arg2, ...argN) {
    return expression;
}


let sum = (a, b) => a + b;
/*
let sum = function(a, b) {
    return a + b;
};
*/

alert (sum(1, 2));  // 3


let double = n => n * 2;
// let double = function(n) { return n * 2 }
alert(double(3));   // 6


let sayHi = () => alert("안녕하세요!");
sayHi();


let age = prompt("나이를 알려 주세요.", 18);

let welcome = (age < 18) ? 
    () => alert("안녕!") :
    () => alert("안녕하세요!");

welcome();


let sum = (a, b) => {
    let result = a + b;
    return result;      // 중괄호를 사용했다면, return으로 결과를 반환해 줘야 한다.
};