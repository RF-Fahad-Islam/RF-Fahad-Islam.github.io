console.log("This is converter.js");
let temperatureInputs = document.getElementsByClassName('temperatureInput');
let fahrenheit = document.getElementById('fahrenheit');
let celsius = document.getElementById('celsius');
let kelvin = document.getElementById('kelvin');
let warn = document.getElementById('warn');
let formula = document.getElementById('formula');
let F;
let C;
let K;
let FtoC;
let FtoK;
let CtoF;
let CtoK;
let KtoF;
let KtoC;
warn.addEventListener('click', (e)=> {
    e.preventDefault();
    formula.innerHTML = "C/5 = (F-32)/9 = (K-273)/5"
})
fahrenheit.addEventListener('input', (e) => {
    F = fahrenheit.value;
    console.log('Fired');
    FtoK = 5 / 9 * (F - 32) + 273;
    FtoC = 5 / 9 * (F - 32);
    celsius.value = FtoC;
    kelvin.value = FtoK;
});
celsius.addEventListener('input', (e) => {
    C = celsius.value;
    CtoK = C + 273;
    CtoF = 9 / 5 * (C) + 32;
    fahrenheit.value = CtoF;
    kelvin.value = CtoK;
});
kelvin.addEventListener('input', (e) => {
    K = kelvin.value;
    KtoF = 9 / 5 * (K - 273) + 32;
    KtoC = K - 273;
    celsius.value = KtoC;
    fahrenheit.value = KtoF;
});