console.log("Connected")
let result = document.getElementById('result')
let formula = document.getElementById('formula')
let calculateBtn = document.getElementById('calculateBtn')
calculateBtn.addEventListener('click', (e) => {
    calculateFactorial()
})

function calculateFactorial() {
    let number = document.getElementById('inputNumber')
    number = Number(number.value)
    let factorial = 1
    let formulaStr = ""
    for (let i = 1; i < number + 1; i++) {
        factorial = factorial * i
        console.log(i);
        if (i == number) {
            formulaStr += `${i}`
        } else {
            formulaStr += `${i} X `
        }
    }
    console.log(formulaStr);
    console.log(factorial);
    result.innerHTML = `<h5>${factorial}</h5>`
    formula.innerHTML = `Formula : ${formulaStr}`
}