// function declaration
function name(parameters) {
    // 함수 본문
}

function showMessage() {
    alert("안녕하세요!");
}

showMessage();
showMessage();


// local variables
function showMessage() {
    let message = "Hello, I'm JavaScript!";  // local variable

    alert(message);
}

showMessage();  // Hello, I'm JavaScript!
alert(message); // <- error!


// outer variables
let userName = 'John';

function showMessageName() {
    userName = "Bob";   // 외부 변수 수정 가능

    let message = "Hello, " + userName;
    alert(message);
}

alert(userName);    // 함수 호출 전이므로 John이 출력된다.

showMessageName();  // Bob 변경 후, Hello, Bob이 출력된다.

alert(userName);    // 함수에 의해 Bob으로 값이 변경되었다.


function showMessageName2() {
    let userName = "Bob";   // 같은 이름을 가진 지역 변수를 선언하면,

    let message = "Hello, " + userName; // 지역 변수를 우선시하게 된다.
    alert(message);
}


// parameters
function showMessage(from, text) {
    alert(from + ": " + text);
}

showMessage("Ann", "Hello!");
showMessage("Ann", "What's up?");


function showMessage(from, text) {
    from = '*' + from + "*";
    alert (from + ": " + text);
}

let from = "Ann";
showMessage(from, "Hello");     // *Ann*: Hello

// 함수는 복사된 값을 사용하기 때문에 함수 바깥의 "from"은 값이 변경되지 않는다.
alert(from);        // Ann


// default values
showMessage("Ann");     // Ann: undefined

function showMessage(from, text = "no text given") {
    alert(from + ": " + text);
}

showMessage("Ann");     // Ann: no text given

function showMessage(from, text = anotherFunction()) {
    // anotherFunction()은 text 값이 없을 때만 호출 됨
    // anotherFunction()의 반환값이 text의 값이 됨
}


// alternative default parameters
function showMessage(text) {
    if (text == undefined) {
        text = 'empty message';
    }
}

function showMessage(text) {
    text = text || 'empty';
}

function showCount(count) {
    alert(count ?? "unknown");
}

showCount(0);       // 0
showCount(null);    // unknown
showCount();        // unknown