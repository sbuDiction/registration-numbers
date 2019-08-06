let getRegNumber = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let showCity = document.querySelector(".showBtn");
let div = document.getElementById("regList");
let radio = document.querySelector(".city");
let radioBtn = document.querySelectorAll(".city");
let erroElement = document.getElementById("error");
let setMax = document.getElementById("input");
let newDiv;
let instance = RegNumbers();

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
    //window.localStorage.setItem("Reg", JSON.stringify(instance.getRegNumbers()))
})
//event for the filter to fil2019181716131415121110987212223242526ter between different towns
showCity.addEventListener("click", function () {
    let selectedRadioBtn = document.querySelector("input[name='radioType']:checked")
    console.log(selectedRadioBtn.value);
    let filteredResults = instance.filtered(selectedRadioBtn.value);
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