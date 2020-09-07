//Created on 8/28/2020
//Note Taking App
//Last modified on 29/08/2020
console.log('Connected');
showNotes();

//for "Add Note" button
//when user clicked the "Add Note" button
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e) {
 let addTxt = document.getElementById('addTxt');
 let addTitle = document.getElementById('addTitle');
 let notes = localStorage.getItem('notes');
 let notesObj;
 if (notes == null) {
     notesObj = [];
 }
 else {
  notesObj = JSON.parse(notes);
 }
 //an object for title and notes
 let obj = {
     title: addTitle.value,
     text: addTxt.value
 };
 notesObj.push(obj);
 notes = localStorage.setItem('notes',JSON.stringify(notesObj));
 addTxt.value = '';
 addTitle.value = '';
 showNotes();
});

//for showing notes
function showNotes() {
    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
     notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        let date = new Date();
        let d = date.getDate();
        let m = date.getMonth();
        let y = date.getFullYear();
        let today = d+"/"+m+"/"+y;
        html += ` <div class="noteCard card mx-3 my-2" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title d-inline-block">${element.title}</h5>
            <span class="card-text d-inline" style="border: 1px solid black">${today}</span>
            <p class="card-text">${element.text}</p>
            <button id="${index}" onclick = "deleteNote()" class="btn btn-danger">Delete</button>
            <button class="btn btn-primary" onclick="mark(${index})">Mark</button>
        </div>
        </div>`
        // console.log(html)
       });
       let noteDls = document.getElementById('notes');
       if (notesObj != 0) {
        noteDls.innerHTML = html;
       }
       else {
        let noneHtml = `  <div class="alert alert-success mx-auto d-block" role="alert">
        <h4 class="alert-heading text-center">Create a note!</h4>
        <p class="text-center">Thank you for visiting our app. <b>You have not any created notes here.</b></p>
        <hr>
        <p class="mb-0 border-1 text-center">Start creating notes from above area. Your notes will be display here</p>
      </div>`
        noteDls.innerHTML = noneHtml;
       }
  
}

//Delete an element from ARRAY
function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
     notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
   notes = localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
}

//Delete storage
function deleteAll() {
    let delConfirm = confirm('Do you rally want to delete all notes');
if (delConfirm == true){
    localStorage.clear();
    alert('notes are deleted')
    showNotes();
} 
}

// mark as important
function mark(index) {
    let noteCard = document.getElementsByClassName('noteCard');
    noteCard[index].setAttribute('style','color: red; border: 2px solid red');
    showNotes();
}

//search feature
let searchTxt = document.getElementById('searchTxt');
//event listener
searchTxt.addEventListener('input', function() {
    let searchItem = document.getElementsByClassName('noteCard');
    Array.from(searchItem).forEach(function(element){
        let pElm = element.getElementsByTagName('p')[0];
        let sElm = element.getElementsByTagName('span')[0];
        inputVal = searchTxt.value;
        //if includes then show
        if (pElm.innerText.includes(inputVal)|| sElm.innerText.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display ="none";
        }
    });

})