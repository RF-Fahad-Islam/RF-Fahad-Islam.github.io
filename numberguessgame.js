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
let guessFrom = document.getElementById("guessFrom")
let customBox = document.getElementById("customBox")
var myModal = new bootstrap.Modal(document.getElementById('modalLevel'))
let radioBtns = document.querySelectorAll("input[name='level']")

for (radioBtn of radioBtns) {
    radioBtn.addEventListener("click", (e) => {
        if (e.target.value === "custom") {
            customBox.style.display = "block"
        } else {
            customBox.style.display = "none"

        }
    })
}
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
    if (document.querySelector("input[name='level']:checked").value == "custom") {
        startNum = Number(document.getElementById("customStartNum").value)
        endNum = Number(document.getElementById("customEndNum").value)
    } else {
        startNum = 1
        endNum = Number(document.querySelector("input[name='level']:checked").value)
    }
    if (endNum == 0) {
        alert("please enter End Number")
    } else {
        num = Math.round(startNum + (endNum - startNum) * num)
        guessFrom.innerHTML = `	
        <i class="fa fa-info-circle"></i> <strong>${startNum}-${endNum}</strong>`
        myModal.hide()
    }
})

submitBtn.addEventListener('click', function (e) {
    inputNum = Number(document.getElementById('inputNum').value)
    // console.log(inputNum);

    if (inputNum < num) {
        numState.innerHTML = `The number is greater than <strong>${inputNum}</strong> <hr><i class="fa fa-exclamation-triangle"></i> Try : ${iteration}`;
        ansColor.classList = 'alert alert-danger text-center'
    } else if (inputNum > num) {
        numState.innerHTML = `The number is less than <strong>${inputNum}</strong> <hr> <i class="fa fa-exclamation-triangle"></i> Try : ${iteration}`;
        ansColor.classList = 'alert alert-danger text-center'
    } else if (inputNum === num) {
        numState.innerHTML = `<i class="fa fa-check-circle"></i> <strong>Well Done!</strong> You guess the number by "${iteration}" try`;
        playAgainBtn.style.display = "inline-block"
        ansColor.classList = 'alert alert-success text-center'
    } else {
        numState.innerHTML = 'Please input a number';
    }
    iteration++
})