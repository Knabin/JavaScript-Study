let calculator = {
    read() {
        this.a = +prompt("첫 번째 값을 입력하세요.", 0);
        this.b = +prompt("두 번째 값을 입력하세요.", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }

};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());