console.log("Connected");
//TODO: Grab DOM Elements
let calculate = document.getElementById('calculate');
let radios = document.querySelectorAll("input[type='radio']");
let result = document.getElementById('result');
let valChanger = document.getElementsByClassName('valChanger');
let buttons = document.getElementsByTagName('button');

let WT = document.getElementById('WT');
let SD = document.getElementById('SD');
let SR = document.getElementById('sleepResult');

//!All inputs 
let inputWTime = document.getElementById('inputWTime');
let inputSTime = document.getElementById('inputSTime');
//!New intialize variables
let click = 0;
let XTime;
let XTime2;
let boldText;
let givenInputText1;
let givenInputText2;
let checkedValue = document.querySelector("input[name='calculateType']:checked").value;


for (const item of radios) {
    item.addEventListener('click', () => {
        checkedValue = document.querySelector("input[name='calculateType']:checked").value;
        if (checkedValue === 'WT') {
            wakeBox.style.display = 'none';
            sleepBox.style.display = 'block';
            durationBox.style.display = 'block';
        } else if (checkedValue === 'BT') {
            wakeBox.style.display = 'block';
            sleepBox.style.display = 'none';
            durationBox.style.display = 'block';
        } else {
            wakeBox.style.display = 'block';
            sleepBox.style.display = 'block';
            durationBox.style.display = 'none';
        }
    });
}


document.getElementById('inputMinute').value = 00;
for (const button of buttons) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
    })
}


// calculate bedtime on click on calculate button
calculate.addEventListener('click', () => {
    console.log(checkedValue);
    calculateTime();
    click++;
});

//function to get duration
function getSleepDuration(dHour, dMinute) {
    if (dHour === 0 || dHour === undefined || dHour === null) {
        retVal = `${dMinute} Minutes`
    } else {
        retVal = `${dHour} Hours ${dMinute} Minutes`
    }
    return retVal
}

//!Calculate Function
function calculateTime() {
    let durationHour = Number(document.getElementById('inputHour').value);
    let durationMinute = Number(document.getElementById('inputMinute').value);

    let hour;
    let minute;
    let icon;
    let givenHour;
    let givenMinute;
    //!Customize Calculation accordind to calculate Type
    if (checkedValue === "BT") {
        XTime = inputWTime;
        boldText = "Bed Time :"

        givenInputText1 = "Wake At: "
        givenInputText2 = "Sleep Duration: "
        hour = durationHour;
        minute = durationMinute;
        givenInputValue1 = inputWTime.value;
        givenInputValue2 = getSleepDuration(durationHour, durationMinute);

        icon = 'bed';
        textColor = 'success';
    } else if (checkedValue === "WT") {
        icon = 'sun-o';
        textColor = 'warning';
        
        XTime = inputSTime;
        boldText = "Wake At :"
        
        givenInputText1 = "Sleep At: "
        givenInputText2 = "Sleep Duration: "
        
        givenInputValue1 = inputSTime.value;
        givenInputValue2 = getSleepDuration(durationHour, durationMinute);
        
        hour = durationHour;
        minute = durationMinute;
    } else if (checkedValue === "SD") {
        icon = 'clock-o';
        textColor = 'danger';

        XTime = inputWTime;
        XTime2 = inputSTime;
        boldText = "Sleep Duration"

        givenInputText1 = "Wake At: "
        givenInputText2 = "Sleep At: "

        givenInputValue1 = inputWTime.value;
        givenInputValue2 = inputSTime.value;

        hour = Number(XTime2.value.charAt(0) + XTime2.value.charAt(1));
        minute = Number(XTime2.value.charAt(3) + XTime2.value.charAt(4));
    }


    givenHour = Number(XTime.value.charAt(0) + XTime.value.charAt(1));
    givenMinute = Number(XTime.value.charAt(3) + XTime.value.charAt(4));

    let calculatedHour;
    let calculatedMinute;
    //TODO:For Hour
    if (givenHour < hour) {
        calculatedHour = Number((givenHour + 24) - hour);
        if (checkedValue === "WT") {
            calculatedHour = Number(givenHour + hour)
        }
    } else {
        calculatedHour = Number(givenHour - hour);
        if (checkedValue === "WT") {
            calculatedHour = Number(Number(givenHour + hour) - 24)
        }
    }
    //TODO:For Minute
    if (givenMinute < minute) {
        calculatedMinute = Number((givenMinute + 60) - minute);
        calculatedHour--;
        if (checkedValue === "WT") {
            let sub = Number(givenMinute + minute)
            if (sub > 60) {
                calculatedMinute = sub - 60;
                calculatedHour++;
            }
        }
    } else {
        calculatedMinute = Number(givenMinute - minute);
        if (checkedValue === "WT") {
            let sub = Number(givenMinute + minute)
            if (sub > 60) {
                calculatedMinute = sub - 60;
                calculatedHour++;
            }
        }
    }
    //TODO:To get AM and PM according to hour or local time
    let state;
    if (calculatedHour > 12) {
        calculatedHour = Number(calculatedHour) - 12;
        state = "PM"
    } else if (calculatedHour === 0) {
        calculatedHour = 12;
        state = "AM"
    } else if (calculatedHour === 12) {
        calculatedHour = 12;
        state = "PM"
    } else {
        state = "AM"
    }

    //TODO: Add 0 for single digit
    //Hour
    if (calculatedHour < 10) {
        calculatedHour = `0${calculatedHour}`;
    }

    //Minute
    if (calculatedMinute < 10) {
        calculatedMinute = `0${calculatedMinute}`;
    }
    let calculation;
    calculation = `${calculatedHour}:${calculatedMinute} ${state}`;
    if (checkedValue === "SD") {
        calculation = getSleepDuration(calculatedHour, calculatedMinute);
    }
    console.log(hour, minute, givenHour, givenMinute, calculatedHour, calculatedMinute, calculation);

    let html = `
<div class="my-3 d-flex justify-content-center align-content-center flex-column">
                        <h3 class="card-title text-center" id="calculateTitle"> ${boldText} </h3>
                        <h4 class="d-block font-weight-bold mx-auto" style="font-size: 3.5rem;">
                            <sup><i class="fa fa-${icon} text-${textColor}"></i></sup> <span id="sleepResult">${calculation}</span>
                        </h4>
                    </div>
                    <hr>
                    <h5 class="d-inline-block">${givenInputText1} (24 Hours Format)</h5>
                    <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
                        style="font-size: 2rem;" id="WT">${givenInputValue1}</h5>
                    <hr>
                    <h5 class="d-inline-block">${givenInputText2}</h4>
                        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
                            style="font-size: 1.5rem;" id="SD">
                           ${givenInputValue2}
                        </h5>
                        <hr>
                        <div class="d-block position-relative" style="bottom: 0px;">
                            <button class="btn btn-outline-warning" type="submit"
                                onclick="location.reload();">Reload</button>
                            <button class="btn btn-outline-success position-relative float-right" type="submit"
                                onclick="window.print();">Print/Save</button>
                        </div>`
    result.innerHTML = html;
}


//A function to display to webpage
// function show(time) {
//     SR.innerHTML = time;
//     WT.innerHTML = XTime.value;
//     SD.innerHTML = `${document.getElementById('inputHour').value} Hours ${document.getElementById('inputMinute').value} Minutes`
// }

//A calculation on value change via valChanger button
for (const changer of valChanger) {
    changer.addEventListener('click', () => {
        if (click > 0) {
            calculateTime();
        }
    });
}