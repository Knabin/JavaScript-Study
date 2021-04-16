while (true)
{
    let input = prompt("100보다 큰 숫자를 입력하세요.", 0);

    if (!input || input == '' || input > 100) {
        break;
    }
}