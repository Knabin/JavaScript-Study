// while
while (condition) {
    // 반복문의 body
}

let i = 0;
while (i < 3) {
    alert(i);
    i++;
}

let i = 3;
while (i) { // i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춘다.
    alert(i);
    i--;
}