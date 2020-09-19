console.log("connected");
let run = document.getElementById('run');
run.addEventListener('click', (e) => {
    e.preventDefault();
    let codeOutput = document.getElementById('codeOutput');
    let codeInput = document.getElementById('codeInput').value;
    let result = eval(codeInput);
    codeOutput.innerHTML = result;
});