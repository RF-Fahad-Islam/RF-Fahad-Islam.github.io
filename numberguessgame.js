console.log("Hello")
let num = Math.random()
console.log(num);
startNum = 1
endNum = 100
num = Math.round(startNum + (endNum - startNum) * num)
let submitBtn = document.getElementById('submitBtn')
let inputNum = 0;
let iteration = 1;
let numState = document.getElementById('numState')
let playAgainBtn = document.getElementById('playAgainBtn')
let ansColor = document.getElementById('ansColor')
let form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
})
playAgainBtn.addEventListener('click', e=> {
    location.reload()
})
console.log(num);
submitBtn.addEventListener('click', function (e) {
    inputNum = Number(document.getElementById('inputNum').value)
    console.log(inputNum);

    if (inputNum < num) {
        numState.innerHTML = `The number is greater than ${inputNum}`;
    } else if (inputNum > num) {
        numState.innerHTML = `The number is less than ${inputNum}`;
    } else if (inputNum === num) {
        numState.innerHTML = `<strong>Well Done!</strong> You guess the number by "${iteration}" try`;
        playAgainBtn.style.display = "inline-block"
        ansColor.classList = 'alert alert-success text-center'
    } else {
        numState.innerHTML = 'Please input a number';
    }
    iteration++
})