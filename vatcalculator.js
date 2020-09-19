console.log("Connected");
let display = document.getElementById('display');
let calculate = document.getElementById('calculate');
let form = document.getElementById('vatCalculator');
let operation = document.getElementById('operation');
let temper = document.getElementById('temper');
vatInput.value = 20;
calculate.addEventListener('click', (e) => {
  e.preventDefault();
  calculateVat();
});

function calculateVat() {
  let amountInput = document.getElementById('amountInput');
  let vatInput = document.getElementById('vatInput');
  let A = Number(amountInput.value);
  let V = Number(vatInput.value);
  let Vpercent = V / 100;
  console.log(Vpercent);
  console.log(A);
  console.log(V);
  let formula = A * Vpercent;
  console.log(formula);
  let type
  if (operation.value === "added") {
    type = A + formula;
  } else {
    type = A - formula
  }
  console.log(type)
  temper.style.display = 'none';
  display.innerHTML += `<h4 class="card-text my-3">
    <ul class="list-group">
    <li class="list-group-item bg-warning">Gross amount (${operation.value}):   <span class="font-weigth-bold" id="gross">${type} $</span></li>
      <li class="list-group-item">Amount :   <span class="font-weigth-bold" id="netAmount">${A} $</span></li>
      <li class="list-group-item">VAT :   <span class="font-weigth-bold" id="vat">(${V}%)</span></li>
      <li class="list-group-item">VAT value :   <span class="font-weigth-bold" id="operationType">${formula} $</span></li>
    </ul>
  </h4>`
}