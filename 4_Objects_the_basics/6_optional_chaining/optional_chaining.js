// the "non-existing property" problem
let user = {};
alert(user.address.street); // TypeError: Cannot read property 'street' of undefined


// querySelector(..) 호출 결과가 null인 경우 에러 발생
let html = document.querySelector('.my-element').innerHTML;


let user = {};
alert(user && user.address && user.address.street);


// optional chaining
let user = {};
alert(user?.address?.street);   // undefined, 에러가 발생하지 않는다.


let user = null;
alert(user?.address);
alert(user?.address.street);


// short-circuiting
let user = null;
let x = 0;

user?.sayHi(x++);   // 아무 일도 일어나지 않는다.
alert(0);   // 0


// other variants: ?.(), ?.[]
let user1 = {
    admin() {
        alert("관리자 계정입니다.");
    }
}
let user2 = {};

user1.admin?.();    // 관리자 계정입니다.
user2.admin?.();


let user1 = {
    firstName: "Nabin"
};
let user2 = null;
let key = "firstName";

alert(user1?.[key]);    // Nabin
alert(user2?.[key]);    // undefined
alert(user1?.[key]?.something?.not?.exisiting); // undefined


delete user?.name;  // user가 존재하면 user.name을 삭제한다.