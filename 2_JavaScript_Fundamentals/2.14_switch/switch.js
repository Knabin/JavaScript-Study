// switch
switch(x) {
    case 'value1':  // if (x === 'value1')
        break;
    case 'value2':
        break;
    case 'value3':
        break;
    default:
        break;
}


let a = 2 + 2;

switch(a) {
    case 3:
        alert('비교하려는 값보다 작습니다.');
        break;
    case 4:     // 여기서부터 실행된다.
        alert('비교하려는 값과 일치합니다.');
        break;  // 여기서 종료된다.
    case 5:
        alert('비교하려는 값보다 큽니다.');
        break;
    default:
        alert('어떤 값인지 파악되지 않습니다.');
}

// without break
switch(a) {
    case 3:
        alert('비교하려는 값보다 작습니다.');
    case 4:     // 여기서부터 실행된다.
        alert('비교하려는 값과 일치합니다.');
    case 5:
        alert('비교하려는 값보다 큽니다.');
    default:
        alert('어떤 값인지 파악되지 않습니다.');
}               // 여기서 종료된다.


let a = "1";
let b = 0;

switch (+a) {
    case b + 1:
        alert("표현식 +a는 1, 표현식 b + 1은 1이므로 이 코드가 실행된다.");
        break;
    default:
        alert("이 코드는 실행되지 않는다.");
}


// Grouping of "case"
let a = 3;

switch(a) {
    case 4:
        alert('Right!');
        break;
    
    case 3:
    case 5:
        alert("Wrong!");
        alert("Why don't you take a math class?");
        break;
    
    default:
        alert("The result is strange. Really.");
}


// type matters

let arg = prompt("값을 입력해 주세요.");
switch (arg) {
    case '0':
    case '1':
        alert('0 or 1');
        break;
    case '2':
        alert('2');
        break;
    case 3:
        alert('Never executes!');
        break;
    default:
        alert('An unknown value');
        break;
}