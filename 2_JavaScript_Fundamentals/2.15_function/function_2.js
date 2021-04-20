// return values
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert(result);  // 3


function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Do you have permission from your parents?");
    }
}

let age = prompt("How old are you?", 18);

if (checkAge(age)) {
    alert("Access granted");
} else {
    alert("Access denied");
}


function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }

    alert("Showing you the movie");
    // ...
}


function doNothing() { /* empty */ }
alert(doNothing() === undefined);   // true

function doNothing() {
    return;
}
alert(doNothing() === undefined);   // true


return//;  // enter를 넣게 되면 세미콜론이 붙은 것과 동일하게 동작한다.
(some + long + expression + or + whatever * f(a) + f(b))

return (    // multi-line으로 작성하고 싶은 경우, 다음과 같이 작성한다.
    some + long +
    expression +
    or +
    whatever * f(a) + f(b)
)


// naming a function
showMessage();      // 메시지를 보여 준다.
getAge();           // 나이를 나타내는 값을 얻고, 그 값을 반환한다.
calcSum();          // 합계를 계산하고, 그 결과값을 반환한다.
createForm();       // form을 생성하고, 만들어진 form을 반환한다.
checkPermission();  // 승인 여부를 확인하고, true나 false를 반환한다.


// functions == comments
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; ++i) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert(i);   // 소수
    }
}


function showPrimes(n) {
    for (let i = 2; i < n; ++i) {
        if (!isPrime(i)) continue;

        alert(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}