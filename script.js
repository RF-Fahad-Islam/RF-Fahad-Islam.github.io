//PASSWORD OF VIEW PAGE
let pass = prompt('Enter the security key to view this page, Only key holder can view this page hint: my name', "I don't know");
console.log(pass);
let validPass = "riyadalfahad";
if (pass === validPass) {
    note.style.display = 'none';
    container.style.visibility = 'visible';
}
else {
    note.style.display = 'block';
    container.style.display = 'none'
    footer.style.display = 'none'
 document.getElementById('note').innerHTML =`<h1>password Incorrect!!!<h1><p>"${pass}" is not a valid key! You are not allowed to view about us page, This key is set for our privacy , only our key holder can access this page.<p>`
}
//PASSWORD OF DOWNLOAD LINK
function down(){
   let downPass = prompt('Enter the security code to download my resume', "I don't have any security key");
   downValidPass = 01905600574;
   if (downPass == downValidPass) {
       location.href = 'https://drive.google.com/file/d/1clOtxv-zeQEr9Nn8Riv-Z4_NZ3k7Kr1k/view?usp=sharing'
       console.log(welcome);
   } else {
       btn.style.display = 'none';
   }
}
//PASSWORD OF IMAGE VIEW
let imgPass = document.getElementById('inputImgPass').value;
function check() {
    let imgPass = document.getElementById('inputImgPass').value;
    imgValidPass = 'fahadisastudent'
    if (imgPass === imgValidPass) {
       let photo = document.getElementById('me');
       photo.src = 'me.jpg';
    //    let newPara = document.createElement('p');
    //    let block = document.getElementById('inputArea');
    //     let bodyElement = document.getElementById('pad');
    //     let text = document.createTextNode('Correct Password!');
    //     newPara.appendChild('text');
    //     newPara.id = 'correct';
    //     bodyElement.replaceChild(newPara, replace);
        inputArea.style.display = 'none';
        let para = document.getElementById('message');
        para.innerHTML = '<h4>Password Correct</h4>';
        para.style.color = 'greenYellow';
    }  else {
        // let newPara = document.createElement('p');
        // let replace = document.getElementById('inputImgPass');
        //  let bodyElement = document.getElementById('message');
        //  let text = document.createTextNode('Incorrect Password! You are not allowed!');
        //  newPara.appendChild(text);
        //  newPara.id = 'incorrect';
        //  newPara.style.color = 'red';
        //  console.log(newPara)
        //  bodyElement.appendChild(newPara);
        //  inputArea.style.display = 'none';
        let enter = document.getElementById('message');
        enter.innerHTML = '<h4>Password Incorrect! You are not allowed to see this<h4>'
        inputArea.style.display = 'none';
        enter.style.color = 'red';
    }
}

