let generate = document.getElementById('generatePassword');
let ssh = document.getElementById('generateSSH');
generate.addEventListener('click', (e) => {
    e.preventDefault();
    let inputPassword = document.getElementById('inputPassword');
    let pass = generatePassword();
    inputPassword.value = pass;
})
ssh.addEventListener('click', (e) => {
    e.preventDefault();
    let inputSSH = document.getElementById('inputSSH');
    let sshkey = generateSSH();
    inputSSH.value = sshkey;
})

function generatePassword() {
    let length = 10;
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "@#$%&" + "abcdefghijklmnopqrstuvwxyz" + "0123456789";
    retVal = "";
    for (let i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return retVal;
}
n = numset.length + 1;

function generateSSH() {
    let lengthNum = 10;
    numset = "0123456789";
    retNum = "";
    for (let i = 0; i < lengthNum; i++) {
        retNum += numset.charAt(Math.floor(Math.random() * numset.length));
    }
    return retNum;
}