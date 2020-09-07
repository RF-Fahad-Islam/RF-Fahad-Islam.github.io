//Created on 8/28/2020
//Note Taking App
//Last modified on 29/08/2020
console.log('Connected');
showTodo();

//for "Add Note" button
//when user clicked the "Add Note" button
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e) {
    // thead.style.display = 'block';
 let addTxt = document.getElementById('addTxt');
 let addTitle = document.getElementById('addTitle');
 let todo = localStorage.getItem('todo');
 let todoObj;
 if (todo == null) {
     todoObj = [];
 }
 else {
  todoObj = JSON.parse(todo);
 }
 //an object for title and notes
 let obj = {
     title: addTitle.value,
     text: addTxt.value
 };
 todoObj.push(obj);
 todo = localStorage.setItem('todo',JSON.stringify(todoObj));
 addTxt.value = '';
 addTitle.value = '';
 showTodo();
});

//for showing notes
function showTodo() {
    let todo = localStorage.getItem('todo');
    let todoObj;
    if (todo == null) {
        todoObj = [];
    }
    else {
     todoObj = JSON.parse(todo);
    }
    let html = "";
    todoObj.forEach(function(element, index){
        let date = new Date();
        let d = date.getDate();
        let m = date.getMonth();
        let y = date.getFullYear();
        let today = d+"/"+m+"/"+y;
        html += `  <tr class='todoTable'>
        <th scope="row">${index + 1}</th>
        <td>${element.title}</td>
        <td>${element.text}</td>
        <td>${today}</td>
       <td> <button type="button" class="btn btn-danger" onclick="deleteTodo(${index});">Delete</button></td>
    </tr>`
        // console.log(html)
       });
       let todoDiv = document.getElementById('todo');
       let tbody = document.getElementById('tbody');
       if (todoObj.length != 0) {
        tbody.innerHTML = html;
        thead.style.display = 'block';
       }
       else if (todoObj.length == 0) {
        let noneHtml = `  <div class="alert alert-warning mx-auto d-block" role="alert">
        <h4 class="alert-heading text-center">Create a To-Do!</h4>
        <p class="text-center">Thank you for visiting our app. <b>You have not any created notes here.</b></p>
        <hr>
        <p class="mb-0 border-1 text-center">Start creating To-Do's from above area. Your To-Do's will be display here</p>
      </div>`
        todoDiv.innerHTML = noneHtml;
        thead.style.display = 'none';
       }
  
}

//Delete an element from ARRAY
function deleteTodo(index) {
    let todo = localStorage.getItem('todo');
    let todoObj;
    if (todo == null) {
        todoObj = [];
    }
    else {
     todoObj = JSON.parse(todo);
    }
    todoObj.splice(index,1);
   notes = localStorage.setItem('todo',JSON.stringify(todoObj));
    showTodo();
}

//Delete storage
function deleteAll() {
    let delConfirm = confirm('Do you rally want to delete all todo');
if (delConfirm == true){
    localStorage.clear();
    alert('todo are deleted!')
    showTodo();
} 
}

// mark as important
function mark(index) {
    let todoTable = document.getElementsByClassName('todoTable');
    todoTable[index].setAttribute('style','color: red; border: 2px solid red');
    showTodo();
}

//search feature
let searchTxt = document.getElementById('searchTxt');
//event listener
searchTxt.addEventListener('input', function() {
    let searchItem = document.getElementsByClassName('todoTable');
    Array.from(searchItem).forEach(function(element){
        let pElm = element.getElementsByTagName('td');
        let sElm = element.getElementsByTagName('th');
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