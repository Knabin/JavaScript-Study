function readNumber() {
    do {
        let num = prompt("숫자를 입력하세요.", '');

        if (num === '' || num === null) {
            return null;
        } else if (isFinite(num)) {
            return +num;
        }

    }  while(true);
}