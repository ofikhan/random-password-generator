let passwordLength = document.getElementById("passwordLength");
let btnPassword = document.getElementById("btnPassword");
let react1 = document.getElementById("react1");
let react2 = document.getElementById("react2");
let react3 = document.getElementById("react3");
let react4 = document.getElementById("react4");
let randomArray = [];

function getRandomCharacter() {
    randomArray = [];
    for (let i = 0; i < passwordLength.value; i++) {
        randomArray.push(String.fromCharCode(Math.floor(Math.random() * 96 + 32)));
    }
    return randomArray.toString().replace(/,/g, "");
}

function generatePassword() {
    if (passwordLength.value < 4) {
        alert("Please give a minimum length of 5");
    } else {
        react1.value = getRandomCharacter();
        react2.value = getRandomCharacter();
        react3.value = getRandomCharacter();
        react4.value = getRandomCharacter();
    }
}

function copyPassword(id) {
    let react = document.getElementById(id);
    /* Select the text field */
    react.select();
    react.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(react.value);

    /* Alert the copied text */
    alert("Copied the password: " + react.value);
}