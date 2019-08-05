let getRegNumber = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let showCity = document.querySelector(".showBtn");
let div = document.getElementById("regList");
let radio = document.querySelector(".city");
let radioBtn = document.querySelectorAll(".city");
let erroElement = document.getElementById("error");
let setMax = document.getElementById("input");
let newDiv;

JSON.parse(window.localStorage.getItem("Reg"));

let instance = RegNumbers();


addBtn.addEventListener("click", function () {
    instance.add(getRegNumber.value);
    let regNumbers = instance.getRegNumbers();
    div.innerHTML = '';

    regNumbers.forEach(element => {
        console.log(element);
        displayReg(element);
    });

    window.localStorage.setItem("Reg", JSON.stringify(instance.getRegNumbers()))
    getRegNumber.value = "";

    if(getRegNumber.value === ""){
        erroElement.innerHTML = "Please add number plate!"
    }
})

function displayReg(RegNumber) {
    newDiv = document.createElement("li");
    let newContent = document.createTextNode(RegNumber);
    newDiv.appendChild(newContent);
    div.appendChild(newDiv);
}

showCity.addEventListener("click", function () {
    let selectedRadioBtn = document.querySelector("input[name='radioType']:checked")
    console.log(selectedRadioBtn.value);
    let filteredResults = instance.filtered(selectedRadioBtn.value);
    div.innerHTML = '';
    filteredResults.forEach(element => {
        console.log(element);
        displayReg(element);
    });
})

setMax.addEventListener("input", function () {
    if (setMax.maxLength = "10") {
        setTimeout(function () {
            erroElement.classList.add("alert");
            erroElement.innerHTML = "Stop!";
        })
    }

})
const showError = () => {
    if (instance.error() === "stop") {
        erroElement.classList.add("alert")
    }
}
