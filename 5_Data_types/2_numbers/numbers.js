// more ways to write a number
let billion = 1000000000;

let billion = 1e9;  // 10억, 1과 9개의 0
alert(7.3e9);       // 73억

1e3 = 1* 1000;
1.23e6 = 1.23 * 1000000


let ms = 0.000001;

let ms = 1e-6;      // 1에서 왼쪽으로 6번 소수점 이동

1e-3 = 1 / 1000 // (=0.001)
1.23e-6 = 1.23 / 1000000 // (=0.00000123)

// hex
alert(0xff);    // 255
alert(0xFF);    // 255 (대소문자 구분 X)

// binary, octal
let a = 0b11111111; // 255
let b = 0o377;      // 255
alert(a == b);      // true


// toString(base)
let num = 255;
alert(num.toString(16));    // ff
alert(num.toString(2));     // 11111111

alert(123456..toString(36));    // 2n9c


// rounding
let num = 1.23456;
alert(Math.floor(num * 100) / 100);     // 1.23456 -> 123.456 -> 123 -> 1.23

let num = 12.34;
alert(num.toFixed(1));  // 12.3

let num = 12.36;
alert(num.toFixed(1));  // 12.4

let num = 12.34;
alert(num.toFixed(5));  // 12.34000


// imprecise calculations
alert(1e500);   // Infinity

alert(0.1 + 0.2 == 0.3);    // false
alert(0.1 + 0.2);           // 0.30000000000000004
alert(0.1.toFixed(20));     // 0.10000000000000000555


let sum = 0.1 + 0.2;
alert(sum.toFixed(2));  // 0.30
alert(+sum.toFixed(2)); // 0.3

alert((0.1 * 10 + 0.2 * 10) / 10);  // 0.3
alert((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001


alert( 9999999999999999 ); // 10000000000000000


// tests: isFinite and isNaN
// isNaN
alert(isNaN(NaN));      // true
alert(isNaN("str"));    // true
alert(NaN === NaN);     // false


// isFinite
alert(isFinite("15"));  // true
alert(isFinite("str")); // false, NaN
alert(isFinite(Infinity));  // false, Infinity

let num = +prompt("숫자를 입력하세요.", '');
alert(isFinite(num));


// parseInt and parseFloat
alert(+"100px");    // NaN

alert(parseInt('100px'));       // 100
alert(parseFloat('12.5em'));    // 12.5
alert(parseInt('12.3'));        // 12, 정수 부분만
alert(parseFloat('12.3.4'));    // 12.3, 두 번째 점에서 멈춤

alert(parseInt('a123'));        // NaN, a는 숫자가 아니기 떄문에 읽기 중단


alert(parseInt('0xff', 16));    // 255
alert(parseInt('ff', 16));      // 255, 0x가 없어도 동작
alert(parseInt('2n9c', 36));    // 123456


// other math functions
// Math.random()
alert(Math.random());
alert(Math.random());
alert(Math.random());

// Math.max(a, b, c ...) / Math.min(a, b, c ...)
alert(Math.max(3, 5, -10, 0 ,1));   // 5
alert(Math.min(1, 2));  // 1

// Math.pow(n, power)
alert(Math.pow(2, 10)); // 2 ^ 10 = 1024
