console.log("connected");
let screen = document.getElementById('screen');
let generate = document.getElementById('generate');
let more = document.getElementById('more');
let state = document.getElementById('state');
generate.addEventListener('click', (e)=> {
    e.preventDefault();
    getNumber()
});
more.addEventListener('click', getNumber);
let random;
let a;
let b;

function getNumber() {
    let firstNumber = document.getElementById('firstNumber');
    let lastNumber = document.getElementById('lastNumber');
    if (firstNumber.value.length != 0 && lastNumber.value.length != 0) {
        a = Number(firstNumber.value);
        b = Number(lastNumber.value);
        random = a + (b - a) * Math.random();
        console.log(random);
        console.log(a, b);
        state.innerHTML = `Randomize between ${a} to ${b}`
        screen.innerHTML += ` <li class="list-group-item text-center">${random}</li>`
        console.log('if');
    } else {
        console.log('else');
        random += Math.random();
        screen.innerHTML += ` <li class="list-group-item text-center"><b>${random}</b></li>`
    }
}