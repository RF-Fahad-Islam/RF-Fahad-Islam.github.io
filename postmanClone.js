console.log("This is PostmanClone.js");
//function to return child
function child(DOM) {
    let div = document.createElement('div');
    div.innerHTML = DOM;
    return div.firstElementChild;
}
//a indexing number
addedParamCount = 0;
// content boxes
paramsBox = document.getElementById('requestParamsBox');
jsonBox = document.getElementById('requestJsonBox')
//hide the params box as json is default
paramsBox.style.display = 'none'
//when user clicks the content type buttons
//content types GET and POST
let json = document.getElementById('requestJson');
let params = document.getElementById('requestCustomParams');
//event listener on both radio buttons
json.addEventListener('click', (e) => {
    jsonBox.style.display = 'block';
    paramsBox.style.display = 'none';
})
params.addEventListener('click', (e) => {
    jsonBox.style.display = 'none';
    paramsBox.style.display = 'block';
})
//when user clicks get or post
let contentBox = document.getElementById('contentBox')
let get = document.getElementById('GET');
let post = document.getElementById('POST');
get.addEventListener('click', () => {
    contentBox.style.display = 'none';
    jsonBox.style.display = 'none';
    paramsBox.style.display = 'none';
})
post.addEventListener('click', () => {
    contentBox.style.display = 'block';
    jsonBox.style.display = 'block';
    paramsBox.style.display = 'none';
})

//showing message
let message = document.getElementById('message');

//when user clicks the + button
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    console.log('You clicked the addParam button');
    let params = document.getElementById('addedParams');
    uiString = `  <div class="form-row my-2 newParamDiv">
                        <label for="parameterKey${addedParamCount+2}" class="col-sm-2 col-form-label">Parameter ${addedParamCount+2}</label>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Enter Parameter-${addedParamCount+2} key" id="parameterKey${addedParamCount+2}">
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Enter Parameter-${addedParamCount+2} value" id="parameterValue${addedParamCount+2}">
                        </div>
                        <button class="btn btn-danger deleteParam">-</button>
                 </div>`

    let paramChild = child(uiString);
    params.appendChild(paramChild);
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (const item of deleteParam) {
        item.addEventListener('click', (e) => {
            let delConfirm = confirm(`Do you really want to remove the parameter`);
            e.preventDefault();
            if (delConfirm) {
                e.target.parentElement.remove();
            }
        })
    }
    addedParamCount++;
    // deleteAll = document.getElementById('deleteAll');
    // if (addedParamCount > 4) {
    //     deleteAll.classList.add('d-block');
    //     deleteAll.classList.remove('d-none');
    //     deleteAll.addEventListener('click', (e)=> {
    //         e.preventDefault();
    //      let deleteItem = document.getElementsByClassName('deleteParam');
    //      for (let param of deleteItem) {
    //         param.parentElement.remove();
    //      }
    //     })
    // } else {
    //     deleteAll.classList.add('d-block');
    //     deleteAll.classList.remove('d-none');
    // }
})
// delete All button

// when user clicks submit button
let response = document.getElementById('responseJsonText');
let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    //showing a loading on response
    message.innerHTML = `  <div class="d-flex align-items-center">
    <strong>Loading...</strong>
    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
  </div>`
    //when fetching Data
    e.target.innerHTML = `<div class="text-center">
       <div class="spinner-border" role="status">
         <span class="sr-only">Loading...</span>
       </div>
     </div>`
    response.innerHTML = "Please wait....Fetching Data...."
    Prism.highlightAll()
    let url = document.getElementById('inputUrl').value;
    requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;
    //log results for debugging
    console.log(url);
    console.log(requestType);
    console.log(contentType);

    //add for loop for getting the key and value to convert it to JSON
    if (contentType === "customParams") {
       let data = {};
        for (let i = 0; i < addedParamCount + 1; i++) {
            if (document.getElementById(parameterKey + (i + 1)) != undefined) {
                let key = document.getElementById(parameterKey + (i + 1)).value;
                let value = document.getElementById(parameterValue + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
        console.log(data);

    } else {
        data = document.getElementById('requestJsonText').value;
    }
    if (requestType === "GET" && url.length != 0 && url.length > 5) {
        fetch(url, {
                method: 'GET'
            })
            .then(response => response.text())
            .then(text => {
                console.log(text);
                response.innerHTML = text;
                Prism.highlightAll()
                message.innerHTML = ""
                e.target.innerHTML = 'Success';
                e.target.classList.add('btn-success');
                e.target.classList.remove('btn-danger');
                e.target.classList.remove('btn-primary');
            })
            .catch(reject => {
                message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error!</strong> Some Error occurred when fetching Data .Try again later.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>`
                response.innerHTML = reject
                e.target.innerHTML = 'Fail';
                e.target.classList.add('btn-danger');
                e.target.classList.remove('btn-primary');
                e.target.classList.remove('btn-success');
            })
    } else if (requestType === "POST" && url.length != 0 && url.length > 5) {
        fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then(response => response.text())
            .then(text => {
                console.log(text);
                response.innerHTML = text;
                Prism.highlightAll()
                message.innerHTML = ""
                e.target.innerHTML = 'Success';
                e.target.classList.add('btn-success');
                e.target.classList.remove('btn-danger');
                e.target.classList.remove('btn-primary');
            })
            .catch(reject => {
                response.innerHTML = reject
                message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error!</strong> Enter a valid URL or Try another.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>`
                e.target.innerHTML = 'Fail';
                e.target.classList.add('btn-danger');
                e.target.classList.remove('btn-success');
                e.target.classList.remove('btn-primary');
            })
    } else {
        response.innerText = "Some error ocurred!Please enter a valid URL & Try again."
        message.innerHTML = ""
        e.target.innerHTML = 'Error!';
        e.target.classList.add('btn-danger');
        e.target.classList.remove('btn-success');
        e.target.classList.remove('btn-primary');
    }
})