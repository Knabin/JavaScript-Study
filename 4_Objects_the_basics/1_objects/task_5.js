function multiplyNumeric(menu) {
    for (let type in menu) {
        if (typeof menu[type] == "number")
        {
            menu[type] *= 2;
        }
    }
}