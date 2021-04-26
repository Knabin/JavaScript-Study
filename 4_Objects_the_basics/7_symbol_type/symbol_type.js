// symbol type
let id = Symbol();
let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");
alert (id1 == id2);     // false

alert(id); // TypeError: Cannot convert a Symbol value to a string
alert(id.toString());   // Symbol(id)
alert(id.description);  // id


// "hidden" properties
let user = {    // 서드파티 코드에서 가져온 객체
    name: "John"
};
let id = Symbol("id");
user[id] = 1;
alert(user[id]);    // 심볼을 키로 사용해 데이터에 접근할 수 있다.


let id = Symbol("id");
user[id] = "제3 스크립트 id 값";


let user = { name: "John" };
// 문자열 "id"를 사용해 식별자를 만든다.
user.id = "스크립트 id 값";
// 만약 제3의 스크립트가 이 스크립트와 동일하게 문자열 "id"를 이용해 식별자를 만들었다면
user.id = "제3 스크립트 id 값"
// 의도치 않게 값이 덮어 쓰여지면서 이 스크립트에서 만든 식별자가 무의미해진다.


// symbols in a literal
let id = Symbol("id");

let user = {
     name: "John",
     age: 30,
     [id]: 123 // "id": 123은 안 됨
}

for (let key in user) alert(key);   // name과 age만 출력된다.
alert ("직접 접근한 값: " + user[id]);


let id = Symbol("id");
let user = {
    [id]: 123
};

let clone = Object.assign({}, user);
alert(clone[id]);   // 123


// global symbols
let id = Symbol.for("id");  // 전역 레지스트리에서 심볼을 읽고, 존재하지 않으면 새로 만든다.
let idAgain = Symbol.for("id"); // 동일한 이름을 다시 읽는다.
alert(id === idAgain);  // true

// SYmbol.keyFor
let sym = Symbol.for("name");
let sym2 = Symfol.for("id");

alert(Symbol.keyFor(sym));  // name
alert(Symbol.keyFor(sym2)); // id


let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert(Symbol.keyFor(globalSymbol)); // name
alert(Symbol.keyFor(localSymbol));  // undefined
alert(localSymbol.description);     // name

// system symbols