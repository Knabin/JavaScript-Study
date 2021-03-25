// to string
let value = true;
alert(typeof value);    // boolean

value = String(value);  // 변수 value엔 문자열 "true"가 저장된다.
alert(typeof value);    // string


// to number
alert("6" / "2");   // 3, 문자열이 숫자형으로 변환된 후 연산이 수행된다.

// Number(value)
let str = "123";
alert(typeof str);  // string

let num = Number(str);  // 문자열 "123"이 숫자 123으로 변환된다.

alert(typeof num);  // number

let age = Number("임의의 문자열 123");
alert(age);     // NaN, 형 변환에 실패한다.

Number(undefined);  // NaN
Number(null);       // 0
Number(true);       // 1
Number(false);      // 0
Number("  123  ");  // 123, 문자열의 처음과 끝 공백을 제거한다.
Number("123z");     // NaN, "z"를 숫자로 변환하는 데 실패했다.


// to boolean
Boolean(1);     // 숫자 1 -> true
Boolean(0);     // 숫자 0 -> false

Boolean("hello");   // 문자열 -> true
Boolean("");     // 빈 문자열 -> false
Boolean(" ");       // 문자열 -> true(주의!!)