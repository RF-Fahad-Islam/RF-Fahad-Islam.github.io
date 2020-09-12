//Created on 8/28/2020
//Note Taking App
//Last modified on 29/08/2020
console.log('Connected');
showNotes();

//for "Add Note" button
//when user clicked the "Add Note" button
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    //an object for title and notes
    let obj = {
        title: addTitle.value,
        text: addTxt.value
    };
    let message = document.getElementById('message');
    if (addTitle.value.length != 0 && addTxt.value.length != 0) {
        notesObj.push(obj);
        notes = localStorage.setItem('notes', JSON.stringify(notesObj));
        addTxt.value = '';
        addTitle.value = '';
        setTimeout(() => {
            message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
         <strong>Success!</strong>Your to-do has been successfully added.
         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
         <span aria-hidden="true">&times;</span>
         </button>
         </div>`
        }, 3000);
    } else {
        message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error!</strong> Please write something on the note title and description.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>`
    }
    showNotes();
    e.preventDefault();
});

//for showing notes
function showNotes() {
    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        let date = new Date();
        let d = date.getDate();
        let m = date.getMonth();
        let y = date.getFullYear();
        let today = d + "/" + m + "/" + y;
        html += ` <div class="noteCard card mx-3 my-2" style="width: 25rem;">
        <div class="card-body">
            <h5 class="card-title d-inline-block">${element.title}</h5>
            <span class="card-text d-inline" style="border: 1px solid black">${today}</span>
            <p class="card-text">${element.text}</p>
            <button id="${index}" onclick = "deleteNote(this.id)" class="btn btn-danger">Delete</button>
            <button class="btn btn-primary mark">Mark</button>
        </div>
        </div>`
        // console.log(html)
    });
    let noteDls = document.getElementById('notes');
    if (notesObj != 0) {
        noteDls.innerHTML = html;
    } else {
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
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    notes = localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

//Delete storage
function deleteAll() {
    let delConfirm = confirm('Do you rally want to delete all notes');
    if (delConfirm == true) {
        localStorage.clear();
        alert('notes are deleted')
        showNotes();
    }
}

// mark as important
let mark = document.getElementsByClassName('mark')
for (const item of mark) {
    item.addEventListener('click', (e) => {
        let notes = localStorage.getItem('notes');
        let notesObj;
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        if (e.target.innerHTML === 'Mark') {
            console.log("Success");
            e.target.innerHTML = 'Unmark';
            e.target.parentElement.classList.add('alert-danger');
            notes = localStorage.setItem('notes', JSON.stringify(notesObj));
        } else {
            notes = localStorage.setItem('notes', JSON.stringify(notesObj));
            e.target.innerHTML = 'Mark';
            e.target.parentElement.classList.remove('alert-danger')
        }

    })
}

//search feature
let searchBtn = document.getElementById('searchBtn');
//event listener
searchBtn.addEventListener('click', function (e) {
    let searchTxt = document.getElementById('searchTxt');
    e.preventDefault();
    let searchItem = document.getElementsByClassName('noteCard');
    Array.from(searchItem).forEach(function (element) {
        let pElm = element.getElementsByTagName('p')[0];
        let hElm = element.getElementsByTagName('h5')[0];
        let sElm = element.getElementsByTagName('span')[0];
        inputVal = searchTxt.value;
        //if includes then show
        if (pElm.innerText.includes(inputVal) || sElm.innerText.includes(inputVal) || hElm.innerText.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });

})