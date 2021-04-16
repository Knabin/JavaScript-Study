// for
for (begin; condition; step) {
    // body
}

for (let i = 0; i < 3; ++i) {
    alert(i);   // 0, 1, 2
}


// inline variable declaration
for (let i = 0; i < 3; ++i) {
    alert(i);   // 0, 1, 2
}
alert(i);   // error, no such variable


let i = 0;
for (i = 0; i < 3; ++i) {
    alert(i);   // 0, 1, 2
}
alert(i);   // 3, visible, because declared outside of the loop


// skipping parts
let i = 0;

for (; i < 3; ++i) { // 'begin' 생략
    alert(i);   // 0, 1, 2
}


let i = 0;

for (; i < 3;) { // 'begin', 'step' 생략
    alert(i++);
}


for (;;) {
    // 무한 루프문
}