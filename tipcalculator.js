console.log("This is tipcalculator.js");
let inputBill = document.getElementById('inputBill');
let inputTip = document.getElementById('inputTip');
let inputNumber = document.getElementById('inputNumber');
let calculateTip = document.getElementById('calculateTip');
let tipAmount = document.getElementById('tipAmount');
let totalAmount = document.getElementById('totalAmount');
let totalState = document.getElementById('totalState');
let tipState = document.getElementById('tipState');
let input = document.getElementsByClassName('form-control');
let valChanger = document.getElementsByClassName('valChanger');
let click = 0;
//add listener to click for calculation
calculateTip.addEventListener('click', (e) => {
    e.preventDefault();
    click += 1;
    calculateTipFunc();
    // console.log(click);
});
//live change on input 
inputBill.addEventListener('input', () => {
    if (click != 0) {
        calculateTipFunc();
    }
});
// live cahnge on click and change the values
for (const item of input) {
    item.addEventListener('input', () => {
        // console.log("clicked");
        if (click != 0) {
            calculateTipFunc();
        }
    });
}
for (const changer of valChanger) {
    changer.addEventListener('click', (e) => {
        // console.log("clicked");
        e.preventDefault();
        if (click != 0) {
            calculateTipFunc();
        }
    });
}
//main calculate function
function calculateTipFunc() {
    //Calculate Tip amount
    let tipPercentage = inputTip.value / 100;
    tip = inputBill.value * tipPercentage;
    tipPerPerson = (tip / inputNumber.value).toFixed(2);
    //Calculate Total amount
    total = Number(inputBill.value) + Number(tip);
    totalPerPerson = (total / inputNumber.value).toFixed(2);
    let state;
    if (totalPerPerson === "Infinity" || tipPerPerson === "Infinity") {
        totalPerPerson = inputBill.value;
        tipPerPerson = "00.00";
    }
    if (inputNumber.value != 1 && inputNumber.value != 0) {
        state = 'Per person';
    } else if (inputNumber.value === 0 || inputNumber.value === 'undefined') {
        state = 'Enter Person Number';
    } else {
        state = 'Single';
    }
    tipAmount.innerHTML = `$${tipPerPerson}`;
    totalAmount.innerHTML = `$${totalPerPerson}`;
    totalState.innerHTML = `${state}`;
    tipState.innerHTML = `${state}`;
    console.log(tipPerPerson, totalPerPerson, tip, total, state);

}