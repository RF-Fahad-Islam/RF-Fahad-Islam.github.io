let pass = prompt('Enter the security key to view this page, Only key holder can view this page hint: my name', "I don't know");
console.log(pass);

if (pass === "riyadalfahad") {
    note.style.display = 'none';
    container.style.visibility = 'visible';
}
else {
    note.style.display = 'block';
    container.style.display = 'none'
    footer.style.display = 'none'
 document.getElementById('note').innerHTML =`<h1>password Incorrect!!!<h1><p>"${pass}" is not a valid key! You are not allowed to view about us page, This key is set for our privacy , only our key holder can access this page.<p>`
}

function down(){
   let download = prompt('Enter the security code to download my resume', "I don't have any security key");
   if (download == 01905600574) {
       console.log(welcome);
   } else {
       btn.style.display = 'none';
   }
}