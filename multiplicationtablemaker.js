console.log("Connected");
let makeBtn = document.getElementById("makeBtn");
let result = document.getElementById("result");
let deleteBtns = document.getElementsByClassName('deleteBtn')
let warn = document.getElementById('warn')

makeBtn.addEventListener('click', (e) => {
    makeMultiplicationTable()
    warn.classList.add('d-none')
});

function makeMultiplicationTable() {
    let inputNumber = document.getElementById("inputNumber");
    num = Number(inputNumber.value)
    multiplicationTable = ""
    for (let i = 1; i < 11; i++) {
        multiplicationTable += `${num} X ${i} = ${num * i}<hr>`
    }
    result.innerHTML += `<div class="col-sm-12">
                    <div class="card">
                    <h5 class="card-header">The multiplication table of ${num}</h5>
                        <div class="card-body">
                            <h5 class="card-title">${multiplicationTable}</h5>
                            <a class="btn btn-outline-danger deleteBtn">Delete</a>
                        </div>
                    </div>
                </div>`
}

for (const deleteBtn of deleteBtns) {
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.parentElement.classList.add('d-none')
    })
}