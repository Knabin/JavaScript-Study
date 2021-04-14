// nullish coalescing operator ??
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// null or undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "Anonymous");    // Supercoder


// comparison with "||"
let height = 0;
alert(height || 100);  // 100
alert(height ?? 100);  // 0


// Precedence
let height = null;
let width = null;

// 괄호에 주의한다.
let area = (height ?? 100) * (width ?? 50);

alert(area);

// without parentheses
let area = height ?? 100 * width ?? 50;
let area = height ?? (100 * width) ?? 50;   // 다음과 같이 실행된다.


// using ?? with && or ||
let x = 1 && 2 ?? 3;    // syntax error
let x = (1 && 2) ?? 3;  // it works

alert(x);   // 2