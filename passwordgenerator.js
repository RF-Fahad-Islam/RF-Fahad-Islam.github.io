let generate = document.getElementById('generatePassword');
let ssh = document.getElementById('generateSSH');
let range = document.getElementById('formControlRange');
range.value = 8;
let rangeText = document.getElementById('rangeText');
range.addEventListener('input', () => {
    console.log(range.value);
    rangeValue = range.value;
    rangeText.innerHTML = range.value;
})

generate.addEventListener('click', (e) => {
    e.preventDefault();
    let inputPassword = document.getElementById('inputPassword');
    let pass;
    let intervalpass = setInterval(() => {
        pass = generatePassword();
        inputPassword.value = pass;
    }, 1);
    setTimeout(() => {
        clearInterval(intervalpass);
        inputPassword.value = pass;
    }, 1000);
})
ssh.addEventListener('click', (e) => {
    e.preventDefault();
    let inputSSH = document.getElementById('inputSSH');
    let sshkey;
    let intervalssh = setInterval(() => {
        sshkey = generateSSH();
        inputSSH.value = sshkey;
    }, 1);
    setTimeout(() => {
        clearInterval(intervalssh);
        inputSSH.value = sshkey;
    }, 1000);
})

function generatePassword() {
    let length = rangeValue;
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "@#$%&" + "abcdefghijklmnopqrstuvwxyz" + "0123456789";
    retVal = "";
    for (let i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return retVal;
}

function generateSSH() {
    let lengthNum = 10;
    numset = "0123456789";
    retNum = "";
    for (let i = 0; i < lengthNum; i++) {
        retNum += numset.charAt(Math.floor(Math.random() * numset.length));
    }
    return retNum;
}
//copy to clipboard functionality
let copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    copyFunc();
});

function copyFunc() {
    var copyText = document.getElementById("inputPassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}