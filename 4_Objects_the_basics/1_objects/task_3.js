const user = {
    name: "John"
};

user.name = "Pete";
// 에러 없이 실행된다.
// const user는 user 자체에 할당된 객체를 변경하지 못하게 한다.
// 객체 안의 내용물에 대해서는 막지 않는다.