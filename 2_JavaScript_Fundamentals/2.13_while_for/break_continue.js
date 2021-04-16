// break
let sum = 0;

while (true) {
    let value = +prompt("숫자를 입력하세요.", '');
    if (!value) break;  // 아무것도 입력하지 않거나, Cancel 버튼 눌렀을 경우

    sum += value;
}

alert('합계 : ' + sum);


// continue
for (let i = 0; i < 10; ++i) {
    // 조건이 참이라면 남아 있는 본문은 실행되지 않는다.
    if (i % 2 == 0) continue;

    alert(i);   // 1, 3, 5, 7, 9
}

for (let i = 0; i < 10; ++i) {
    if (i % 2) {
        alert(i);
    }
}


if (i > 5) {
    alert(i);
} else {
    continue;
}
// =>
//(i > 5) ? alert(i) : continue;        // error!


// break/continue with label
labelName: for(begin; condition; step) {

}

outer: for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
        let input = prompt(`(${i},${j})의 값`, '');
        if (!input) break outer;
    }
}
alert('완료!');

outer:
for (let i = 0; i < 3; ++i) {}


break label;    // jump to the label below (doesn't work)

label: for (;;) {}

label: {
    // ...
    break label;    // it works
    // ...
}