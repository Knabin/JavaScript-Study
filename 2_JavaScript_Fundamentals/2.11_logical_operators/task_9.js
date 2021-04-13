let id = prompt("사용자 이름을 입력하세요.", "");

if (id == "Admin") {
    let pw = prompt("비밀번호를 입력하세요.", "");
    
    if (pw == "TheMaster") {
        alert("환영합니다!");
    } else if (pw == "" || pw == null) {
        alert("취소되었습니다.");
    } else {
        alert("인증에 실패하였습니다.");
    }
} else if (id == "" || id == null) {
    alert("취소되었습니다.");
} else {
    alert("알 수 없는 사용자입니다.");
}