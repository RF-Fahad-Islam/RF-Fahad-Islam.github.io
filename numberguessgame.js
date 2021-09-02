// console.log("Hello")
let num = Math.random()
// console.log(num);
let startNum;
let endNum;
let submitBtn = document.getElementById('submitBtn')
let inputNum;
startNum = 1
let iteration = 1;
let level;
let numState = document.getElementById('numState')
let playAgainBtn = document.getElementById('playAgainBtn')
let ansColor = document.getElementById('ansColor')
let form = document.getElementById("form")
let startGame = document.getElementById("startGame")
let startNumPage = document.getElementById("startNum")
let endNumPage = document.getElementById("endNum")
var myModal = new bootstrap.Modal(document.getElementById('modalLevel'))
myModal.show()
form.addEventListener("submit", (e) => {
    e.preventDefault()
})
playAgainBtn.addEventListener('click', e => {
    location.reload()
})
// console.log(num);
startGame.addEventListener('click', e => {
    e.preventDefault()
    endNum = Number(document.querySelector("input[name='level']:checked").value)
    num = Math.round(startNum + (endNum - startNum) * num)
    endNumPage.innerText = String(endNum)
    startNumPage.innerText = String(startNum)
    myModal.hide()
})

submitBtn.addEventListener('click', function (e) {
    inputNum = Number(document.getElementById('inputNum').value)
    // console.log(inputNum);

    if (inputNum < num) {
        numState.innerHTML = `The number is greater than <strong>${inputNum}</strong>`;
        ansColor.classList = 'alert alert-danger text-center'
    } else if (inputNum > num) {
        numState.innerHTML = `The number is less than <strong>${inputNum}</strong>`;
        ansColor.classList = 'alert alert-danger text-center'
    } else if (inputNum === num) {
        numState.innerHTML = `<strong>Well Done!</strong> You guess the number by "${iteration}" try`;
        playAgainBtn.style.display = "inline-block"
        ansColor.classList = 'alert alert-success text-center'
    } else {
        numState.innerHTML = 'Please input a number';
    }
    iteration++
})