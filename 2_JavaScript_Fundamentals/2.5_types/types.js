// js == dynamically typed language
let message = "hello";
message = 123456;       // no error!


// number type
let n = 123;
n = 3.141592;

// Infinity
alert(1 / 0);
alert(Infinity);

// Nan
alert("숫자가 아님" / 2);
alert("숫자가 아님" / 2 + 5);

// 끝에 'n'이 붙으면 BigInt형 자료
const bigInt = 1234567890123456789012345678901234567890n;


// string type
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// backtick
let name = "John";
alert(`Hello, ${name}!`);   // Hello, John!
alert(`the result is ${1 + 2}`);    // the result is 3
alert('the result is ${1 + 2}');    // the result is ${1 + 2}
alert("the result is ${1 + 2}");    // the result is ${1 + 2}


// boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
alert(isGreater);   // true


// null
let age = null;


// undefined
let undef;
alert(undef);   // 'undefined'

// 값을 undefined로 변경한다. => 권장하지 않음!
let undef2 = 100;
undef2 = undefined;
alert(undef2);  // 'undefined'


// typeof
typeof undefined    // "undefined"
typeof 0            // "number"
typeof 10n          // "bigint"
typeof true         // "boolean"
typeof "foo"        // "string"
typeof Symbol("id") // "symbol"
typeof Math         // "object" (1)
typeof null         // "object" (2)
typeof alert        // "function" (3)