console.log("Connected")
let result = document.getElementById('result')
let detectBtn = document.getElementById('detectBtn')
detectBtn.addEventListener('click', (e) => {
    // e.preventDefault()
    console.log("clicked")
    detectPrimeNumber()
})

function detectPrimeNumber(){
    let inputNumber = document.getElementById('inputNumber').value
    for (let i = 2; i < Number(inputNumber); i++) {
        if (Number(inputNumber) % i == 0) {
            result.innerHTML = "<h5>This number is not Prime</h5>"
            console.log("Not")
            result.classList.add('alert-success')
            result.classList.remove('alert-warning')
            result.classList.remove('alert-danger')
            break;
        } else {
            console.log("Yes")
            result.innerHTML = "<h5>This number is a Prime number</h5>"
            result.classList.add('alert-danger')
            result.classList.remove('alert-warning')
            result.classList.remove('alert-success')
        }
    }
}