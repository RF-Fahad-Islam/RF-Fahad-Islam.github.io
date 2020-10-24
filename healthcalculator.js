console.log("Connected");
//TODO: Grab the DOM elements
let centimeterBox = document.getElementById('centimeterBox');
let inchBox = document.getElementById('inchBox');

let heightRadios = document.querySelectorAll("input[name='heightType']");
let inputAge = document.getElementById('inputAge');
let inputWeight = document.getElementById('inputWeight');
let inputCentimeter = document.getElementById('inputCentimeter');

let InputInch = document.getElementById('InputInch');
let inputFoot = document.getElementById('inputFoot');


let calculate = document.getElementById('calculate');
let result = document.getElementById('result');

//TODO: Make a ifelse statement for the + Settings button to give the user more controlls
let settingsBtn = document.getElementById('settingsBtn');
let settingSection = document.getElementById('settingSection');
settingsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (settingSection.style.display === "none") {
        settingSection.style.display = "block"
        settingsBtn.innerHTML = "<i class='fa fa-minus'></i> Settings"
    } else {
        settingSection.style.display = "none"
        settingsBtn.innerHTML = "<i class='fa fa-plus'></i> Settings"
    }
});

//TODO: Dark mode 
function darkMode() {
    var element = document.body;
    var element2 = document.querySelectorAll('.card');
    var element3 = document.querySelectorAll('.card-body');
    var h5s = document.querySelectorAll('h5');
    var inputs = document.querySelectorAll('input');
    var anchors = document.querySelectorAll('a');
    var labels = document.querySelectorAll('label');
    var selects = document.querySelectorAll('select');
    var spans = document.querySelectorAll('span');
    var uls = document.querySelectorAll('ul');
    var lis = document.querySelectorAll('.list-group-item');
    var navs = document.querySelectorAll('nav');
    var textMuted = document.querySelectorAll('.text-muted');
    if (element.classList.toggle('bg-dark') && element.classList.toggle("text-white")) {
        for (const text of textMuted) {
            text.classList.remove('text-muted');
        }
    } else {
        for (const text of textMuted) {
            text.classList.add('text-muted');
        }
    }
    for (const card of element2) {
        card.classList.toggle("bg-dark")
        card.classList.toggle("text-white")
    }
    for (const h5 of h5s) {
        h5.classList.toggle("text-white");
        h5.classList.toggle('bg-dark');
    }
    for (const cardBody of element3) {
        cardBody.classList.toggle("bg-dark")
        cardBody.classList.toggle("text-white")
    }
    for (const nav of navs) {
        nav.classList.toggle("bg-dark")
        nav.classList.toggle("navbar-dark")
    }
    for (const li of lis) {
        li.classList.toggle("bg-dark");
        li.classList.toggle("text-white");
    }
    for (const anchor of anchors) {
        anchor.classList.toggle("text-primary");
    }
    for (const input of inputs) {
        input.classList.toggle("text-white");
        input.classList.toggle("bg-dark");
    }
    for (const select of selects) {
        select.classList.toggle("text-white");
        select.classList.toggle("bg-dark");
    }
    for (const span of spans) {
        span.classList.toggle("text-white");
        span.classList.toggle("bg-dark");
    }
    for (const label of labels) {
        label.classList.toggle("text-white");
        label.classList.toggle("bg-dark");
    }
    for (const ul of uls) {
        ul.classList.toggle("text-white");
        ul.classList.toggle("bg-dark");
    }

}

//TODO: Copy Calorie Result
function copyCalorie() {
    /* Get the text field */
    var copyText = document.getElementById("calorieResult");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

//TODO: show to height input box according to height measuring type
for (const item of heightRadios) {
    item.addEventListener('click', (e) => {
        if (e.target.value === "centimeter") {
            inchBox.style.display = 'none';
            centimeterBox.style.display = 'block';
        } else if (e.target.value === "inches&foot") {
            inchBox.style.display = 'block';
            centimeterBox.style.display = 'none';
        }
    });
}

//TODO: Add a event listener to every button to prevent the page load
// let buttons = document.getElementsByTagName('button');
// for (const button of buttons) {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//     })
// }

//TODO: Add event listener to calculate button. when user click the calculate button this calculate funtion will run.
calculate.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = "#result";
    calculateHealth();
})

// !Calculate function
//TODO: Add a calculte function for calculate the health states and needs.
function calculateHealth() {
    let heightType = document.querySelector("input[name='heightType']:checked").value;
    let calculateItemChecked = document.querySelector("input[name='calculate']:checked").value;
    let age = Number(inputAge.value);
    let weight = Number(inputWeight.value);
    let gender = document.querySelector("input[name='gender']:checked").value;
    let physicalState = document.getElementById('physicalState').value;
    let height;
    //Convert Inches to centimeter for get the height in cm scale 
    if (heightType === "centimeter") {
        let centimeter = Number(inputCentimeter.value);
        height = centimeter;
    } else {
        console.log("You used inch section");
        let foot = Number(inputFoot.value);
        let inches = Number(inputInch.value);
        let totalInches = Number((foot * 12) + inches);
        let convertToCentimeter = Number(totalInches * 2.54);
        console.log(foot, inches, totalInches, convertToCentimeter);
        height = convertToCentimeter;
    }

    console.log(`Height ${height}, Weight ${weight}, Age ${age}, gender ${gender}, physical state ${physicalState}`);
    //TODO: Add a verification for calculation

    if (age == 0 || height == null || height === undefined || weight == 0 || physicalState === "none") {
        errorAlert.style.display = "block";
        successAlert.style.display = "none";
        result.innerHTML = `
        <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>`
        setTimeout(() => {
            result.innerHTML = `
            <h5 class="alert alert-danger d-block font-weight-bolder text-center">404 Error <i class="fa fa-exclamation-circle"></i> <br> No values has been given</h5>`
        }, 5000);
    }
    //! When all values is correct
    else {
        // !Calculate BMR (Heris BeneDict law)
        //According to gender
        let BMR;
        let calories;
        let kilojoules;
        let icon;
        if (gender === "male") {
            BMR = `${(66 + (13.7 * weight) + (5 * height)) - (6.8 * age)}`
            icon = 'male';
        } else {
            BMR = `${(655 + (9.6 * weight) + (1.8 * height)) - (4.7 * age)}`
            icon = 'female';
        }
        console.log(`Your BMR ${BMR}`);

        //TODO: Calculate  calorie according to physical state 
        let multipicationValue;
        if (physicalState === 'low') {
            multipicationValue = 1.2;
        } else if (physicalState === 'normal') {
            multipicationValue = 1.375;
        } else if (physicalState === 'medium') {
            multipicationValue = 1.55;
        } else if (physicalState === 'high') {
            multipicationValue = 1.725;
        } else if (physicalState === 'veryHigh') {
            multipicationValue = 1.9;
        } else {
            multipicationValue = "Choose the physical state"
        }
        calories = (BMR * multipicationValue);

        // TODO: Calculate KiloJoules from calories
        kilojoules = calories * 4.184;
        calories = Number(calories).toFixed(2);
        kilojoules = Number(kilojoules).toFixed(1);
        BMR = Number(BMR).toFixed(2);
        console.log(`Your calorie need ${calories}`);

        //TODO: Show the bodyBurnsValue let 
        let bodyBurning;
        let bodyBurningText;
        let multipicationValue2;
        let resultTypeChecked = document.querySelector("input[name='resultIn']:checked").value;
        if (resultTypeChecked === "kiloJoules") {
            bodyBurning = kilojoules;
            bodyBurningText = "kiloJoules";
            multipicationValue2 = "X 4.184";
        } else {
            bodyBurning = calories;
            bodyBurningText = "calories";
            multipicationValue2 = "";
        }

        // !Calculate BMI according to height and weight
        heightInMeter = `${height / 100}`;
        let BMI = `${weight / (heightInMeter**2)}`
        BMI = Number(BMI).toFixed(1);
        console.log(BMI, heightInMeter);

        //TODO: Justify the BMI index value
        let textColor;
        let state;
        let explainState;
        let tips;
        let weightText;
        if (BMI < 18.5) {
            state = "Underweight"
            explainState = "শরীরের ওজন কম";
            tips = "পরিমিত খাদ্য গ্রহণ করে ওজন বাড়াতে হবে"
            textColor = 'black-50';
            weightText = "Low weight";
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            state = "Normal"
            explainState = "সুসাস্থ্যের আদর্শ মান";
            tips = "এটি বজায় রাখতে হবে । অতিরিক্ত বা অসাস্থ্যকর খাদ্য গ্রহণ করে সাস্থ্য বাড়ানো যাবে না"
            textColor = 'success';
            weightText = "OverWeight / Underweight";
        } else if (BMI > 24.9 && BMI <= 29.9) {
            state = "Overweight"
            explainState = "শরীরের ওজন বেশি";
            tips = "চিন্তিত হবেন না । ব্যায়াম করে ওজন কমাতে হবে";
            textColor = 'warning'
            weightText = "OverWeight";
        } else if (BMI > 29.9 && BMI <= 34.9) {
            state = "obese"
            explainState = "স্থুল (পর্যায়-১): মেদ বেশি | অতিরিক্ত ওজন";
            tips = "বেছে খাদ্যগ্রহণ ও ব্যায়াম করা প্রয়োজন ।"
            textColor = 'warning';
            weightText = "High OverWeight";
        } else if (BMI > 34.9 && BMI <= 39.9) {
            state = "obese (High)"
            explainState = "বেশি স্থুল (পর্যায়-২) ।<br> অতিরিক্ত মেদ";
            tips = "পরিমিত খাদ্যগ্রহণ ও বেশ ব্যায়াম করা প্রয়োজন । <br> ওজন নিয়োন্ত্রণে আনতে হবে | <br> প্রয়োজনে ডাক্তারের পরামর্শ প্রয়োজন"
            textColor = 'danger';
            weightText = "OverWeight (very high)";
        } else {
            state = "Extremly obese"
            explainState = "অতিরিক্ত স্থুল (শেষ পর্যায়)। মৃত্যুঝুঁকির আশংকা!";
            tips = "ডাক্তারের পরামর্শ প্রয়োজন । দ্রুত ওজন নিয়ন্ত্রণে আনতে হবে"
            textColor = 'danger';
            weightText = "OverWeight (extreme)";
        }
        // TODO: According to good BMI and given Height calculate the perfect weight for this height
        //from 
        let healthyBMI1 = 18.5;
        //to
        let healthyBMI2 = 24.9;
        //from
        let healthyWeight1 = `${healthyBMI1 * (heightInMeter**2)}`
        healthyWeight1 = Math.round(healthyWeight1);
        //to
        let healthyWeight2 = `${healthyBMI2 * (heightInMeter**2)}`
        healthyWeight2 = Math.round(healthyWeight2);
        //a sequence resulth
        let healthyWeight = `${healthyWeight1} to ${healthyWeight2}`
        let healthyBMI = `${healthyBMI1} to ${healthyBMI2}`
        //Average Result
        let averageHealthyWeight = `${(healthyWeight1 + healthyWeight2) / 2}`
        let averageHealthyBMI = `${(healthyBMI1 + healthyBMI2) / 2}`

        //TODO: Calculate the difference between healty weight and Given Weight;
        let defferenceWeight;
        if (state === "Underweight") {
            defferenceWeight = `${healthyWeight1 - weight}kg To ${healthyWeight2 - weight}kg`
        } else if (state === "Normal") {
            defferenceWeight = "(N/A) Perfect Weight"
        } else {
            defferenceWeight = `${weight - healthyWeight1}kg To ${weight - healthyWeight2}kg`
        }

        //TODO; Make the HTML for show the results for each sections
        let htmlForBMI;
        let htmlForCalories;
        let htmlForButtons

        htmlForCalories = `
    <div class="my-3 d-flex justify-content-center align-content-center flex-column">
    <h5 class="card-header my-3">Your Daily ${bodyBurningText} needs | According to <b>BMR</b></h5>
    <h3 class="card-title text-center" id="calculateTitle">${bodyBurningText} need Per Day : </h3>
    <h4 class="d-block font-weight-bold mx-auto" style="font-size: 1.5rem;">
        <sup><i class="fa fa-fire text-danger"></i></sup> <span id="calorieResult"> ${bodyBurning}
            ${bodyBurningText}/Day</span>
            <!-- The button used to copy the text -->
            <span onclick="copyCalorie()" class="btn btn-outline-primary"><i class="fa fa-clipboard"></i></span>
    </h4>
</div>
<hr>
<h5 class="d-inline-block">BMR : </h5>
<h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
    style="font-size: 1.5rem;" id="BMRResult">${BMR}</h5>
<hr>
<h5 class="d-inline-block">${bodyBurningText} : (c)</h5>
<h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
    style="font-size: 1.5rem;" id="SD">
    <i class="fa fa-clipboard"></i> ${BMR} X ${multipicationValue} ${multipicationValue2}
</h5>
<hr>
<h5 class="d-inline-block">Used BMR Law : </h5>
<h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
style="font-size: 1.5rem;" id="SD">
<i class="fa fa-codepen text-codepen"></i> Heris Bene-Dict 
</h5>
<hr>`

        //TODO: BMI HTML
        htmlForBMI = `
    <div class="my-3 d-flex justify-content-center align-content-center flex-column text-center">
    <h5 class="card-header my-3">Your Health Statistics</h5>
    <h3 class="card-title text-center" id="calculateTitle">Health State (BMI) : </h3>
    <h4 class="d-block font-weight-bold mx-auto" style="font-size: 1rem;">
        <sup><i class="fa fa-${icon} text-${textColor}"></i></sup> &nbsp;&nbsp;<span id="calorieResult"> ${explainState}
        </span> <small><a id="showBMIChart" onclick="showChart()" class="link text-primary">Chart <i class="fa fa-area-chart"></i></a></small>
    </h4>
</div>
<h4>
    <ul class="list-group">
    <li class="list-group-item" style="display: none;" id="BMIChart">Chart : <div id="img d-flex justify-content-center">
            <img src="bmi-chart.gif" class="d-block mx-auto img" alt="BMI Chart">
        </div>
    </li>
    <li class="list-group-item">BMI Formula : <span
            class=" alert responsive d-block font-weight-bolder text-danger text-muted bg-light my-3"><i
                class="font-weight-bolder text-muted">=</i> weight(kg) /
            Height(m) <sup class="font-weight-bolder">2</sup></span>
    </li>

    <li class="list-group-item">Your BMI (Body Mass Index) : <span
    class=" alert responsive d-block font-weight-bolder text-danger text-muted bg-light my-3">= ${BMI}</span> <a onclick="showBMIStateTable()" class="link text-primary" id="BMITableBtn">Show BMI Table</a>
    <div class="card mx-auto" id="BMIStateTable" style="border: none;
    width: 100%;
    height: auto;
    display: none;">
    <br>
    <div class="card-body bg-light mx-auto">
        <b>Check the health stats according to BMI (Body Mass Index) </b>
    </div>
    <table class="table table-striped mx-auto">
        <thead>
            <tr>
                <th scope="col">BMI</th>
                <th scope="col">State</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"> &lt; 18.5</th>
                <td>শরীরের ওজন কম (Underweight)</td>
            </tr>
            <tr>
                <th scope="row">18.5 to 24.9</th>
                <td>সুসাস্থ্যের আদর্শ মান (Normal)</td>
            </tr>
            <tr>
                <th scope="row">25 to 29.9</th>
                <td>শরীরের ওজন বেশি (Overweight)</td>
            </tr>
            <tr>
                <th scope="row">30 to 34.9</th>
                <td>"স্থুল (পর্যায়-১): মেদ বেশি | অতিরিক্ত ওজন (Obese I)</td>
            </tr>
            <tr>
                <th scope="row">35 to 39.9</th>
                <td>বেশি স্থুল (পর্যায়-২) । অতিরিক্ত মেদ (Obese II)</td>
            </tr>
            <tr>
                <th scope="row">&gt 40</th>
                <td>অতিরিক্ত স্থুল (শেষ পর্যায়)। মৃত্যুঝুঁকির আশংকা! (Obese III Extreme)</td>
            </tr>
        </tbody>
    </table>
</div>
    </li>
    <li class="list-group-item" id="state">State : <span
            class=" alert responsive d-block font-weight-bolder text-danger text-muted bg-light my-3"><i
                class="font-weight-bolder text-muted">=</i> ${state}</span>
    </li>
    <hr>
        <li class="list-group-item" id="goodValues">1. Your BMI should be : <span
        class=" alert responsive d-block font-weight-bolder text-danger text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${healthyBMI}</span>
        <span
        class=" alert responsive d-block font-weight-bolder text-danger text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${averageHealthyBMI} <small>(Average)</small></span>
        </li>
        <li class="list-group-item">2.Your Weight should be : <span
        class=" alert responsive d-block font-weight-bolder text-danger text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${healthyWeight}</span>
        <span
        class=" alert responsive d-block font-weight-bolder text-danger text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${averageHealthyWeight} <small>(Average)</small></span>
        </li>
        <li class="list-group-item" id="goodWeightDifference">${weightText}<span
        class=" alert responsive d-block font-weight-bolder text-danger text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${defferenceWeight}</span>
        </li>
        <hr>
        <li class="list-group-item" id="tips">Tips (করনীয়) : <span
        class=" alert responsive d-block font-weight-bolder text-danger text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${tips}</span>
        </li>
    </ul>
</h4>
    `
        //TODO: Button HTML 
        htmlForButtons = `
    <button class="btn btn-outline-warning" type="submit" onclick="location.reload();">Reload</button>
    <button class="btn btn-outline-success position-relative float-right" type="submit"
    onclick="window.print();">Print/Save</button>`
        result.classList.add('d-none');

        //TODO: Add alert with success message when calculate will be finished
        errorAlert.style.display = "none";
        successAlert.style.display = "block";
        setTimeout(() => {
            successAlert.classList.add('hide')
            successAlert.style.display = "none";
        }, 4000);

        //TODO: Show the results according to user need
        if (calculateItemChecked === "bmr") {
            calorieSection.innerHTML = htmlForCalories;
            healthSection.innerHTML = "";
        } else if (calculateItemChecked === "bmi") {
            healthSection.innerHTML = htmlForBMI;
            calorieSection.innerHTML = "";
        } else if (calculateItemChecked === "all") {
            healthSection.innerHTML = htmlForBMI;
            calorieSection.innerHTML = htmlForCalories;
        }
        buttons.innerHTML = htmlForButtons;

        //! Show the navigator
        let navigator = document.getElementById('navigator');
        if (calculateItemChecked === "all") {
            navigator.style.display = "block";
        } else {
            navigator.style.display = "none";
        }
    } //End of the else statement
}

//TODO: A function for showing BMI chart
function showChart() {
    BMIChart.style.display = "block";
}

//TODO: A function to showing the BMI state Table
function showBMIStateTable() {
    if (BMIStateTable.style.display === "none") {
        BMIStateTable.style.display = "block";
        BMITableBtn.innerHTML = "Hide BMI Table"
    } else {
        BMIStateTable.style.display = "none";
        BMITableBtn.innerHTML = "Show BMI Table"
    }
}

//!Add Event Listener For article Sections
let readSectionBtn = document.getElementById('readSectionBtn');
readSectionBtn.addEventListener('click', () => {
    let readSectionArticle = document.getElementById('readSectionArticle');
    if (readSectionArticle.style.display === "none") {
        readSectionArticle.style.display = "block";
        readSectionBtn.innerHTML = `<i class="fa fa-minus float-right"></i>`;
    } else {
        readSectionArticle.style.display = "none";
        readSectionBtn.innerHTML = `<i class="fa fa-plus float-right"></i>`;
    }
});

let BMIMore = document.getElementById('BMIMore');
BMIMore.addEventListener('click', () => {
    let BMIArticle = document.getElementById('BMIArticle');
    if (BMIArticle.style.display === "none") {
        BMIArticle.style.display = "block";
    } else {
        BMIArticle.style.display = "none";
    }
})

let BMRMore = document.getElementById('BMRMore');
BMRMore.addEventListener('click', () => {
    let BMRArticle = document.getElementById('BMRArticle');
    if (BMRArticle.style.display === "none") {
        BMRArticle.style.display = "block";
    } else {
        BMRArticle.style.display = "none";
    }
})

let overweightRiskContent = document.getElementById('overweightRiskContent');
overweightRiskContent.addEventListener('click', () => {
    let overweightRiskArticle = document.getElementById('overweightRiskArticle');
    if (overweightRiskArticle.style.display === "none") {
        overweightRiskArticle.style.display = "block";
    } else {
        overweightRiskArticle.style.display = "none";
    }
})
let underweightRiskContent = document.getElementById('underweightRiskContent');
underweightRiskContent.addEventListener('click', () => {
    let underweightRiskArticle = document.getElementById('underweightRiskArticle');
    if (underweightRiskArticle.style.display === "none") {
        underweightRiskArticle.style.display = "block";
    } else {
        underweightRiskArticle.style.display = "none";
    }
})
let BMILimitContent = document.getElementById('BMILimitContent');
BMILimitContent.addEventListener('click', () => {
    let BMILimitArticle = document.getElementById('BMILimitArticle');
    if (BMILimitArticle.style.display === "none") {
        BMILimitArticle.style.display = "block";
    } else {
        BMILimitArticle.style.display = "none";
    }
})
let BMITableContent = document.getElementById('BMITableContent');
BMITableContent.addEventListener('click', () => {
    let BMIStateTable2 = document.getElementById('BMIStateTable2');
    if (BMIStateTable2.style.display === "none") {
        BMIStateTable2.style.display = "block";
    } else {
        BMIStateTable2.style.display = "none";
    }
})