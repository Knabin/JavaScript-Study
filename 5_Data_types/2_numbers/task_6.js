// let num = min + Math.random() * (max - min);
// 예를 들어서 randomInteger(1, 3)이라고 하면
// 버림 하면 3이 적게 나오고
// 올림 하면 1이 적게 나오고
// => 반올림 처리를 해야 한다.

// 1 -> 0.5 / 2 -> 1 / 3 -> 0.5
// 반올림 시 각 정수가 나올 수 있는 범위가 다르기 때문에 뭔가 처리를 해 줘야 한다.
// => 1이 나오려면 0.5부터, 3이 나오려면 3.5까지

function randomInteger(min, max) {
    let num = (min - 0.5) + Math.random() * (max - min + 1);
    return Math.round(num);
}