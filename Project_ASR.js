function themePicker() {
    let themeNumber = 0;;
    switch (themeNumber) {
        case 0:
            setTheme('black', 'white');
            themeNumber++;
            break;
        case 1:
            setTheme('white', 'black');
            themeNumber++;
            break;
        case 2:
            setTheme('#ffc0b9', 'white');
            themeNumber++;
            break;
        case 3:
            setTheme('#b1eed0', 'black');
            themeNumber = 0;
            break;
    }
}

function setTheme(bodyColor, textColor) {
    document.body.style.backgroundColor = bodyColor;
    document.getElementById("QUICKQUILL").style.color = textColor;
    document.getElementById("notepicker").style.borderColor = textColor;
    document.getElementById("note").style.borderColor = textColor;
    document.getElementById("header").style.borderColor = textColor;
    document.getElementById("authors").style.color = textColor;
}