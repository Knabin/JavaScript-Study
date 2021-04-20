function showPrompt() {
    let x = prompt("x를 입력하세요.", '');
    if (x == undefined || x == '') {
        alert("유효하지 않은 x입니다.");
        return;
    }

    let n = prompt("n을 입력하세요.", '');
    if (n == undefined || n == '' || n < 1) {
        alert("유효하지 않은 n입니다. \n자연수를 입력해 주세요.");
        return;
    }

    alert(pow(x, n));
}

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; ++i) {
        result *= x;
    }
    return result;
}

showPrompt();