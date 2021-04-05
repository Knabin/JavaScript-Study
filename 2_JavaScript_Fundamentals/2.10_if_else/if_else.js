let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015) alert('정답입니다!');

if (year == 2015) {
    alert("정답입니다!");
    alert("아주 똑똑하시네요!");
}


// truthy & falsy
if (0) {    // 0 => falsy
    // ...
}

if (1) {    // 1 => truthy
    // ...
}

let cond = (year == 2015);  // true or false
if (cond) {
    // ...
}


// if-else
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015) {
    alert( '정답입니다!' );
} else {
    alert( '오답입니다!' ); // 2015 이외의 값을 입력한 경우
}


// if-else if
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year < 2015) {
    alert( '숫자를 좀 더 올려보세요.' );
} else if (year > 2015) {
    alert( '숫자를 좀 더 내려보세요.' );
} else {
    alert( '정답입니다!' );
}


// conditional operator '?'
let age = prompt("나이를 입력해 주세요.", '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
alert(accessAllowed);

let result = condition ? value1 : value2;
let accessAllowed = (age > 18) ? true : false;
let accessAllowed = age > 18 ? true : false;    // OK


// multiple '?'
let age = prompt("나이를 입력해 주세요.", '18');

let message = (age < 3) ? '아가야 안녕?' :
    (age < 18) ? '안녕!' :
    (age < 100) ? '환영합니다!' :
    '나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요!';

alert(messgae);


// non-traditional use of '?'
let company = prompt("자바스크립트는 어떤 회사가 만들었을까요?", '');

(company == 'Netscape') ? alert('정답입니다!') : alert('오답입니다!');