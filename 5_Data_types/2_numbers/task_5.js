alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

function random(min, max) {
    return min + Math.random() * (max - min);
}