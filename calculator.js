console.log("This is calculator.js");
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = "";
let equal = document.getElementById('calculative');
screen.addEventListener('input', () => {
    result = eval(screen.value);
    screen.value = result;
})
// screen.addEventListener('blur', () => {
//     screen.value = "";
// })
for (button of buttons) {
    button.addEventListener('click', (e) => {
        buttonValue = e.target.value;
        let buttonText = e.target.innerText;
        console.log(buttonValue);
        if (buttonValue === "root") {
            screenValue = Math.sqrt(screenValue);
            screen.value += 'sqrt';
        } 
       else if (buttonValue === "sin") {
            screenValue = Math.sin(screenValue);
            screen.value += 'sin';
        } 
       else if (buttonValue === "cos") {
            screenValue = Math.cos(screenValue);
            screen.value += 'cos';
        } 
       else if (buttonValue === "tan") {
           screenValue = Math.tan(screenValue);
            screen.value += 'tan';
        } 
       else if (buttonValue === "pie") {
           screenValue += Math.PI;
            screen.value += 'pie';
        } 
       else if (buttonValue === "C") {
            screenValue = "";
            screen.value = "";
        } 
        //else if (buttonValue === "^") {
            //     buttonValue = "**";
            //     screenValue += buttonValue;
            //     screen.value = screenValue;
        //} 
        else if (buttonValue === "=") {
            let result = eval(screenValue);
            screen.value = result;
        } else {
            screenValue += buttonValue;
            screen.value += buttonText;
        }
    })
}