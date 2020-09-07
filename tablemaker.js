console.log('connected');
class Student {
    constructor(name, roll, Class, section, subject, total, marks, difference, grade, group, rate) {
        this.name = name;
        this.name = name;
        this.roll = roll;
        this.class = Class;
        this.section = section;
        this.subject = subject;
        this.total = total;
        this.marks = marks;
        this.difference = difference;
        this.grade = grade;
        this.group = group;
        this.rate = rate;
    }
}

//creating a display class for storing functions
class Display {
    add(student, index) {
        let stVal = localStorage.getItem('studentInfo');
        let stObj;
        if (stObj == 0) {
            stObj = [];
        }
        else {
            stObj = JSON.parse(stVal)
        }
        console.log('adding to webpage');
        let tbody = document.getElementById('outputTable');
        let uiString = `      <tr>
                        <th scope="row" class="tbody">${index}</th>
                        <td>${student.name}</td>
                        <td>${student.roll}</td>
                        <td>${student.class}</td>
                        <td>${student.section}</td>
                        <td>${student.subject}</td>
                        <td>${student.total}</td>
                        <td>${student.marks}</td>
                        <td>${student.difference}</td>
                        <td>${student.grade}</td>
                        <td>${student.group}</td>
                        <td>${student.rate}</td>
                    </tr>`
                    tbody.innerHTML += uiString;
    }
    clear() {
        let inputForm = document.getElementById('studentForm');
        inputForm.reset();
    }
    validate(student) {
        if (student.name.length < 3 || student.section.length < 3 || student.subject.length < 3) {
            return false;
        } else {
            return true;
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
//add submit event listener
let index = 0;
let studentForm = document.getElementById('studentForm');
studentForm.addEventListener('submit', studentFormSubmit);
//student form submit function
function studentFormSubmit(e) {
    let name = document.getElementById('inputStName').value;
    let roll = document.getElementById('inputStRoll').value;
    let Class = document.getElementById('inputStClass').value;
    let section = document.getElementById('inputStSection').value;
    let subject = document.getElementById('inputStSubject').value;
    let total = document.getElementById('totalMarks').value;
    let marks = document.getElementById('inputStMarks').value;
    let grade = document.getElementById('inputStGrade').value;
    let rate = document.getElementById('inputStRate').value;
    let difference = total - marks;
    //for radio buttons
    let group;
    let science = document.getElementById('rScience');
    let commerce = document.getElementById('rCommerce');
    if (science.checked) {
        group = science.value;
    } else if (commerce.checked) {
        group = commerce.value;
    }
    let student = new Student(name, roll, Class, section, subject, total, marks, difference, grade, group, rate);
    console.log(student);
    //adding display 
    let display = new Display();
    if (display.validate(student)) {
        index = index + 1;
        display.add(student, index);
        // display.clear();
        display.show('success', 'Your table has been created successfully. Check it below.');
        let stVal = localStorage.getItem('studentInfo');
        let stObj;
        if (stObj == 0) {
            stObj = [];
        }
        else {
            stObj = JSON.parse(stVal)
        }
        stObj.push(student);
        localStorage.setItem('studentInfo', JSON.stringify(student));
    //     stObj.forEach(function(element, index) {
    //         display.add(element, index);
    //     })
    }
    else {
        display.show('danger', `We can't create the table. Please enter fill the form below.`);
    }
    e.preventDefault();
}