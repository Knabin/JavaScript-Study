let message = 
    login == '직원' ? '안녕하세요.' : 
    login == '임원' ? '환영합니다.' :
    login == '' ? '로그인이 필요합니다.' :
    '';