'use strict'

let message;
message = 'Hello!'; // 문자열을 저장한다.

alert(message); // 변수에 저장된 값을 보여 준다.

let message_one_line = 'Hello!';    // 선언과 함께 값을 할당할 수 있다.

let user = 'John', age = 25, says = 'Hello';    // 한 줄에도 작성 가능하다.

// 그러나 가독성을 위해 개행을 하는 편이 좋다.
let user2 = 'Nabin';
let age2 = 25;
let says2 = 'Hello!!';

// 이런 방식도 가능하다.
let hello = 'Hello',
    world = 'World';


let name;

name = 'Hello!';
name = 'World!';    // 값이 변경된다.

name = message; // message의 값을 name에 복사한다.

alert(name);
alert(message);


const myBirthday = '11.06';
//myBirthday = '1.1';   // error!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;