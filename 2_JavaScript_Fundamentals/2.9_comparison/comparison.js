// comparison operators return 'boolean'
alert(2 > 1);   // true
alert(2 == 1);  // false
alert(2 != 1);  // true

let result = 5 > 4; // 비교 결과를 변수에 할당
alert(result);      // true


// String comparison
alert('Z' > 'A');       // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be');    // true


// comparison of different types
alert('2' > 1);     // true, string '2'  -> number 2
alert('01' == 1);   // true, string '01' -> number 1

alert(true == 1);   // true
alert(false == 0);  // true

let a = 0;
alert(Boolean(a));  // false

let b = "0";
alert(Boolean(b));  // true;

alert(a == b);      // true!


// equality operator
alert(0 == false);  // true
alert('' == false); // true

// 'strict' equality operator
alert(0 === false); // false


// Comparison with null and undefined
alert(null === undefined);  // false
alert(null == undefined);   // true

// strange result: null vs 0
alert(null > 0);        // (1) false
alert(null == 0);       // (2) false
alert(null >= 0);       // (3) true

// incomparable undefined
alert(undefined > 0);   // (1) false
alert(undefined < 0);   // (2) false
alert(undefined == 0);  // (3) false