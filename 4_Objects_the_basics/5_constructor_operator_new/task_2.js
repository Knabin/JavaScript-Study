function Calculator() {
    this.read = function read() {
        this.a = +prompt("첫 번째 숫자를 입력하세요.", 0);
        this.b = +prompt("두 번째 숫자를 입력하세요.", 0);
    }

    this.sum = function sum() {
        return this.a + this.b;
    }

    this.mul = function mul() {
        return this.a * this.b;
    }

}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );