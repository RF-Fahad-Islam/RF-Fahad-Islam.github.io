console.log("connected");
let givenDateInput = document.getElementById('givenDateInput');
let display = document.getElementById('display');
let currentDateInput = document.getElementById('currentDateInput');
let printBtn = document.getElementById('printBtn');
let calculate = document.getElementById('calculate');
let statistics = document.getElementById('statistics');
// calculate.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("myBtn").click();
//   }
// });
calculate.addEventListener('click', (e) => {
  e.preventDefault();
  calculateAge();
})
//add a enter event listener
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
    calculateDate = Math.abs(30 - (givenDate - (currentDate + 1)));
    calculateMonth++;
    console.log("Date", calculateDate);
  } else {
    calculateDate = Math.abs(currentDate - givenDate);
    console.log("Date", calculateDate);
    calculateMonth++;
  }
  //compare month
  if (givenMonth > currentMonth) {
    calculateMonth = 12 - (givenMonth - currentMonth);
    calculateYear++;
    console.log("Month", calculateMonth);
  } else {
    calculateMonth = currentMonth - givenMonth;
    console.log("Month", calculateMonth);
  }
  //compare year
  if (currentYear > givenYear || currentYear === givenYear || currentYear < givenYear) {
    calculateYear = Math.abs(currentYear - givenYear);
    console.log("Year", calculateYear);
  }
  display.innerHTML = `
                <h4><ul class="list-group">
                <li class="list-group-item active text-center"> <h2 class="font-weigth-bold">Your age:</h2> <span class="age text-center d-block alert alert-light my-3">${calculateYear} Years ${calculateMonth} Months ${calculateDate} Days</span></li>
            </ul></h4>`

  //add to statistics 
  //passed times
  let now = new Date();
  let passedYears = `${calculateYear} Years ${calculateMonth} Months ${calculateDate} Days`
  let passedMonths = calculateYear * 12 + calculateMonth;
  let PMS = `${passedMonths} Months ${calculateDate} Days`

  let passedWeeks = Math.floor(passedMonths * 4.52);
  let PWS = `${passedWeeks} Weeks ${calculateDate} Days`

  let passedDays = Math.floor(passedMonths * 30.45);
  let PDS = `${passedDays} Days ${now.getHours()} Hours`

  let passedHours = passedDays * 24;
  let PHS = `${passedHours} Hours ${now.getMinutes()} Minutes`

  let passedMinutes = passedHours * 60 + now.getMinutes();
  let PMnS = `${passedMinutes} Minutes ${now.getSeconds()} Seconds`

  let passedSeconds = (passedMinutes * 60) + now.getSeconds();
  let PSS = `${passedSeconds} Seconds ${now.getMilliseconds()} Milliseconds`

  let passedMilliseconds = (passedSeconds * 1000);
  let PMmS = `${passedMilliseconds} Milliseconds`

  statistics.innerHTML = `
        <div class="card-header">
          Statistics
        </div>
        <h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">You Passed (Years) :  <span class=" alert responsive d-block font-weight-light bg-light my-3">${passedYears}</span></li>
          <li class="list-group-item">You passed (Monts) :  <span class=" alert responsive d-block font-weight-light bg-light my-3">${PMS}</span></li>
          <li class="list-group-item">You passed (Weeks) :  <span class=" alert responsive d-block font-weight-light bg-light my-3">${PWS}</span></li>
          <li class="list-group-item">You passed (Days) :  <span class=" alert responsive d-block font-weight-light bg-light my-3">${PDS}</span></li>
          <li class="list-group-item">You passed (Hours) :  <span class=" alert responsive d-block font-weight-light bg-light my-3">${PHS}</span></li>
          <li class="list-group-item">You passed (Minutes) :  <span class=" alert responsive d-block font-weight-light bg-light my-3">${PMnS}</span></li>
          <li class="list-group-item">You passed (Seconds) : <span class=" alert responsive d-block font-weight-light bg-light my-3"> ${PSS}</span></li>
          <li class="list-group-item">You passed (MiliSeconds) :  <span class=" alert responsive d-block font-weight-light bg-light my-3">${PMmS}</span></li>
        </ul>
        </h4>
        <div class="card-footer text-muted">
          Just Now
        </div>
      <button class="my-3 btn btn-outline-success font-weight-bold d-block" onclick="window.print();" id="formula">Print Results</button>`;
  printBtn.innerHTML = `<input type="button" class="btn btn-outline-success" onclick="window.print();" value="Print Results" />`;
}
//add event listener for print button
// let print = document.getElementById('print');
// print.addEventListener('click', (e) => {
//   e.preventDefault();
//   window.print();
// });