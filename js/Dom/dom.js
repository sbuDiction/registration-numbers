let getRegNumber = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let showCity = document.querySelector(".showBtn");
let div = document.getElementById("regList");
let radio = document.querySelector(".city");
let radioBtn = document.querySelectorAll(".city");
let erroElement = document.getElementById("error");
let setMax = document.getElementById("input");
let reset = document.querySelector(".showBtnReset");
let newDiv;

let newStore
if (localStorage['Reg']) {
    newStore = JSON.parse(localStorage['Reg']);
} else {
    newStore = [];
}

let instance = RegNumbers(newStore);

//error msg 
if (getRegNumber.value === "") {
    erroElement.innerHTML = "Please add number plate to register";
    erroElement.classList.remove("alert")
    erroElement.classList.add("alert")
}
//setting the input max
setMax.addEventListener("input", function () {
    if (setMax.maxLength = "10") {
        erroElement.classList.add("example");
        erroElement.innerHTML = "eg('CA 123 344')";
    }
})

//add button event for when clicked
addBtn.addEventListener("click", function () {
    instance.add(getRegNumber.value);

    erroElement.innerHTML = instance.error();

    let regNumbers = instance.getRegNumbers();
    div.innerHTML = '';
    regNumbers.forEach(element => {
        displayReg(element);
    });
    getRegNumber.value = "";
    window.localStorage.setItem("Reg", JSON.stringify(instance.getRegNumbers()))
})

//event for the filter to filter between different towns
showCity.addEventListener("click", function () {

    radio = document.querySelector("input[name='radioType']:checked")
    if (!radio) {
        erroElement.innerHTML = "Please select town!"
    }
    let filteredResults = instance.filtered(radio.value);
    div.innerHTML = '';
    filteredResults.forEach(element => {
        displayReg(element);
    });

})

//for appending elements on the dom dynamically 
const displayReg = (RegNumber) => {
    newDiv = document.createElement("li");
    let newContent = document.createTextNode(RegNumber);
    newDiv.appendChild(newContent);
    div.appendChild(newDiv);
}

reset.addEventListener("click", function(){
    instance.clear()
    localStorage.removeItem("Reg")
    div.innerHTML = "";
})

let update = instance.filtered(radio.value)
update.forEach(element => {
    displayReg(element)
});
