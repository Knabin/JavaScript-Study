function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('보호자의 동의를 받으셨나요?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;    // 18세 이상은 여기서 return 처리가 되기 때문에
    }                   // else문이 없어도 18세 미만은
    return confirm('보호자의 동의를 받으셨나요?');  // 해당 return 처리된다
}