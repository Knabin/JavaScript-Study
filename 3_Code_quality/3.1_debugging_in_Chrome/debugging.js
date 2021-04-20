function hello(name) {
    let phrase = `Hello, ${name}!`;

    debugger;   // break point

    say(phrase);
}

for (let i = 0; i < 5; ++i) {
    console.log("숫자", i);
}