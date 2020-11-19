let url = "https://api.currencyfreaks.com/latest?apikey=6f6441fc4a7744c8b8e92edc578fa422"
let searchBtn = document.getElementById("searchBtn")
let currencyoption = document.getElementById("currencyoption")
let searchTxt = document.getElementById('searchTxt');
let tableap = document.getElementById("tableap")
let amount = document.getElementById("amount")
let resultCalc = document.getElementById("resultCalc")
let spinner = document.getElementById("spinner")
let calculateBtn = document.getElementById("calculateBtn")
let i = 1
let obj = {}
let a = []
searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
})
fetch(url).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    console.log(data.rates)
    spinner.innerHTML = ""
    for (key in data.rates) {
        // console.log(key)
        a.push(key)
        obj[key] = data.rates[key]
    }
    a.sort()
    for (let k = 0; k < a.length; k++) {
        currencyoption.innerHTML += `<option value=${a[k]}>${a[k]}</option>`
        tableap.innerHTML += `<tr class="tableContent">
                <th scope="row">${i}</th>
                <td><b>${a[k]}</b></td>
                <td><b>${obj[a[k]]}</b></td>
                </tr>`
        i++
    }
})
console.log(obj)
calculateBtn.addEventListener("click", (e) => {
    e.preventDefault()
    calculate()
});

function calculate() {
    currencyoption = document.getElementById("currencyoption")
    currencyoption = currencyoption.value
    console.log(currencyoption)
    amount = amount.value
    console.log(amount)
    USDRate = obj[currencyoption]
    console.log(USDRate)
    currencyvalue = 1 / Number(USDRate)
    currencyvalue = currencyvalue.toFixed(3)
    console.log(currencyvalue)
    resultCalc.innerHTML = `<b>The ${amount} ${currencyoption} in USD = ${Number(amount)*currencyvalue}</b>`
}

searchTxt.addEventListener('input', (e) => {
    e.preventDefault();
    let searchItem = document.getElementsByClassName('tableContent');
    Array.from(searchItem).forEach((element) => {
        let tdElm = element.getElementsByTagName('td')[0];
        inputVal = searchTxt.value.toUpperCase();
        //if includes then show
        if (tdElm.innerText.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});