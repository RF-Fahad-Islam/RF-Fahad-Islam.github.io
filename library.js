class Book {
    constructor(name, author, type){
        this.name = name;
        this.author = author;
        this.type =  type; 
    }
}

class Display{
    add(book){
        let tbody = document.getElementById('tbody');
        let uiString = ` <tr>
                            <th scope="row">#</th>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`

       tbody.innerHTML += uiString;
    }
    clear(){
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book){
        if (book.name.length<3 || book.author.length<3) {
            return false
        } else {
           return true
        }
    }
    show(type, displayMessage){
        let message = document.getElementById('message');
        let boldText;
        if (type == 'danger') {
            boldText = 'Error!';
        }
        else {
            boldText = 'Success!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>${boldText}</strong> ${displayMessage}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>`
                   
        setTimeout(() => {
            message.innerHTML = "";
        }, 5000);
    }
}
//library
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById('inputName').value;
    let author = document.getElementById('inputAuthor').value;
    let type;
    let fiction = document.getElementById('fiction');
      let programming = document.getElementById('programming');
      let science = document.getElementById('science');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (science.checked) {
        type = science.value;
    }
    let book = new Book(name, author, type);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your table has been created successfully. Check it below.');

    } else {
        display.show('danger', `We can't create the table. Please fill in the form below.`);
    }
    e.preventDefault();
}