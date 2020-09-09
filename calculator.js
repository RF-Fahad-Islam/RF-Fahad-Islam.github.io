console.log("This is calculator.js");
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = "";
for (button of buttons) {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText === "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } 
        else if (buttonText === "C") {
            screenValue ="";
            screen.value = "";
        }
        else if (buttonText === "^") {
            buttonText ="**";
            screenValue += buttonText;
            screen.value = screenValue;
        }
         else if (buttonText === "=") {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}