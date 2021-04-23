function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function read() {
        let input = +prompt("값을 입력하세요.", 0);
        this.value += input;
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);