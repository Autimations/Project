/**
 * Toggles between different themes for the application.
 */
let themeNumber = 0;


function themePicker() {
    // Switch between themes based on the current theme number
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

/**
 * Sets the theme for the application.
 *
 * @param {string} bodyColor - The background color for the body.
 * @param {string} textColor - The text color for various elements.
 */
function setTheme(bodyColor, textColor) {
    // Set the background color of the body
    document.body.style.backgroundColor = bodyColor;

    // Set text color for specific elements
    document.getElementById("QUICKQUILL").style.color = textColor;
    document.getElementById("notepicker").style.borderColor = textColor;
    document.getElementById("note").style.borderColor = textColor;
    document.getElementById("header").style.borderColor = textColor;
    document.getElementById("authors").style.color = textColor;

/**
 * Sets the theme for the application.
 *
 * @param {string} bodyColor - The background color for the body.
 * @param {string} textColor - The text color for various elements.
 */
function setTheme(bodyColor, textColor) {
    // Set the background color of the body
    document.body.style.backgroundColor = bodyColor;

    // Set text color for specific elements
    document.getElementById("QUICKQUILL").style.color = textColor;
    document.getElementById("notepicker").style.borderColor = textColor;
    document.getElementById("note").style.borderColor = textColor;
    document.getElementById("header").style.borderColor = textColor;
    document.getElementById("authors").style.color = textColor;
}

var noteList = [];

function addNote(name){
    
}

function deleteNote(name){

}

function lockNote(){

}

function unlockNote(){

}
