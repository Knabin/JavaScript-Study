// alert
alert("Hello");


// prompt(title, [default]);
let  age = prompt('나이를 입력해 주세요.', 100);
alert(`당신의 나이는 ${age}살입니다.`);

// IE를 비롯한 모든 사용자에게 깔끔한 프롬포트를 보여 주려면 두 번째 매개변수를 전달하도록 하자.
let test = prompt("Test", '');  // <-- IE 사용자를 위한 매개변수 처리


// confirm
let isBoss = confirm("당신이 주인인가요?");
alert(isBoss);      // 확인을 눌렀다면 true가 출력된다.