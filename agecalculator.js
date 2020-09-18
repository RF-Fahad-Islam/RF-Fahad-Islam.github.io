console.log("connected");
let givenDateInput = document.getElementById('givenDateInput');
let display = document.getElementById('display');
let currentDateInput = document.getElementById('currentDateInput');
let printBtn = document.getElementById('printBtn');
let calculate = document.getElementById('calculate');
let statistics = document.getElementById('statistics');
calculate.addEventListener('click', (e) => {
    e.preventDefault();
    calculateAge();
})
currentDateInput.valueAsDate = new Date();
//calculate age function
function calculateAge() {
    let givenDateValue = new Date(givenDateInput.value);
    let currentDateValue = new Date(currentDateInput.value);
    let givenYear = givenDateValue.getFullYear();
    let givenMonth = givenDateValue.getMonth();
    let givenDate = givenDateValue.getDate();
    let currentYear = currentDateValue.getFullYear();
    let currentMonth = currentDateValue.getMonth();
    let currentDate = currentDateValue.getDate();
    console.log(givenDateValue, currentDateValue, givenYear, givenMonth, givenDate, currentYear, currentMonth, currentDate);
    //compare date
    let calculateDate;
    let calculateMonth;
    let calculateYear;
    if (givenDate > currentDate) {
        calculateDate = 30 - (givenDate - (currentDate+1));
        calculateMonth = givenMonth - 1;
        console.log("Date", calculateDate);
    } else {
        calculateDate = currentDate - givenDate;
        console.log("Date", calculateDate);
    }
    //compare month
    if (givenMonth > currentMonth) {
        calculateMonth = 12 - (givenMonth - (currentMonth+1));
        calculateYear = givenYear + 1;
        console.log("Month", calculateMonth);
    } else {
        calculateMonth = currentMonth - givenMonth;
        console.log("Month", calculateMonth);
    }
    //compare year
    if (currentYear > givenYear || currentYear === givenYear || currentYear < givenYear) {
        calculateYear = currentYear - givenYear;
        console.log("Year", calculateYear);
    }
    display.innerHTML = `
                <h3><ul class="list-group">
                <li class="list-group-item active text-center">Your age: <span class="text-center">${Math.abs(calculateYear)} Years ${Math.abs(calculateMonth)} Months ${Math.abs(calculateDate)} Days</span></li>
            </ul></h3>`

    //add to statistics 
    let now = new Date();
    let passedYears = `${calculateYear} Years ${calculateMonth} Months ${calculateDate} Days`
    let passedMonths = calculateYear * 12 + calculateMonth;
    let passedWeeks = calculateYear * 54 + calculateMonth;
    let passedDays = (calculateYear * 365) + calculateMonth * 30 + calculateDate;
    let passedHours = (passedDays * 24) + now.getHours();
    let passedMinutes = (passedHours * 60) + now.getMinutes();
    let passedSeconds = passedMinutes * 60;
    let passedMilliseconds = passedSeconds * 1000;
        passedMilliseconds += 1;
        statistics.innerHTML = `    <div class="card">
        <div class="card-header">
          Statistics
        </div>
        <h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">You Passed (Years) :  ${passedYears}</li>
          <li class="list-group-item">You passed (Monts) :  ${passedMonths} Months</li>
          <li class="list-group-item">You passed (Days) :  ${passedDays} Days</li>
          <li class="list-group-item">You passed (Hours) :  ${passedHours} Hours</li>
          <li class="list-group-item">You passed (Minutes) :  ${passedMinutes} Minutes</li>
          <li class="list-group-item">You passed (Seconds) :  ${passedSeconds} Seconds</li>
          <li class="list-group-item">You passed (MiliSecunds) :  ${passedMilliseconds} Miliseconds</li>
        </ul>
        </h3>
        <div class="card-footer text-muted">
          Just Now
        </div>
      </div>
      <button class="my-3 btn btn-outline-success font-weight-bold d-block" onclick="window.print();" id="formula">Print Results</button>`;
printBtn.innerHTML = `  <button class="my-3 btn btn-outline-success font-weight-bold d-block" id="print">Print Results</button>`;
}
//add event listener for print button
let print = document.getElementById('print');
print.addEventListener('click', (e)=> {
  e.preventDefault();
  window.print();
});