// unary & binary
// unary
let x = 1;
x = -x;
alert(x);   // -1, 단항 마이너스 연산자는 부호를 뒤집는다.

// binary
let a = 1, b = 3;
alert(b - a);   // 2, 이항 마이너스 연산자는 뺄셈 처리한다.


// remainder operator
alert(5 % 2);   // 5를 2로 나눈 후, 나머지인 1을 출력한다.
alert(8 % 3);   // 8을 3으로 나눈 후, 나머지인 2를 출력한다.


// exponenetiation operator
alert(2 ** 2);  // 4  (2 * 2)
alert(2 ** 3);  // 8  (2 * 2 * 2)
alert(2 ** 4);  // 16 (2 * 2 * 2 * 2)

alert(4 ** (1/2));  // 2 (1/2 거듭제곱은 제곱근)
alert(8 ** (1/3));  // 2 (1/3 거듭제곱은 세제곱근)


// +(binary) with string
let s = "my" + "string";
alert(s);   // mystring

alert('1' + 2); // "12"
alert(2 + '1'); // "21"

alert(2 + 2 + '1'); // '221'이 아닌 '41'이 출력된다.

alert(6 - '2');     // 4, '2'를 숫자로 바꾼 후 연산한다.
alert('6' / '2');   // 3, 두 피연산자를 숫자로 바꾼 후 연산한다.


// +(unary)
// 숫자에는 아무런 영향을 미치지 않는다.
let x = 1;
alert(+x);  // 1

let y = -2;
alert(+y);  // -2

// 숫자형이 아닌 피연산자는 숫자형으로 변환된다.
alert(+true);   // 1
alert(+"");     // 0

// example : datas from HTML form fields
let apples = "2";
let oranges = "3";

alert(apples + oranges);    // 23, 이항 덧셈 연산자는 문자열을 연결한다.
alert(+apples + +oranges);  // 5
alert(Number(apples) + Number(oranges));


// = assignment
let x = 2 * 2 + 1;
alert(x);   // 5

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);    // 3 - (3);

alert(a);   // 3
alert(c);   // 0

a = b = c = 2 + 2;

alert(a);   // 4
alert(b);   // 4
alert(c);   // 4


// modify-in-place
let n = 2;
n += 5; // n = n + 5
n *= 2; // n = n * 2

let n = 2;
n *= 3 + 5;
alert(n);   // 16, 우측의 3 + 5 = 8부터 계산되기 때문에 n = n * 8


// increment & decrement
let counter = 2;
counter++;  // counter = counter + 1
counter--;  // counter = counter - 1

// prefix form
let counter = 1;
let a = ++counter;  // 증가 이후의 값 반환
alert(a);   // 2

// postfix form
let counter = 1;
let a = counter++;  // 증가 이전의 값 반환
alert(a);   // 1


// comma operator
let a = (1 + 2, 3 + 4);
alert(7);   // 3 + 4

for (a = 1, b = 3, c = a * b; a < 10; a++) {
    //...
}