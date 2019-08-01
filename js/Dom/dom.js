var getRegNumber = document.querySelector(".input");
var addBtn = document.querySelector(".addBtn");
var showCity = document.querySelector(".showBtn");
var div = document.getElementById("regList");
var radio = document.querySelector(".city")
var radioBtn = document.querySelectorAll(".city");
var instance = RegNumbers();

var newDiv

addBtn.addEventListener("click", function () {
    if (getRegNumber.value != "") {
        instance.add(getRegNumber.value)
        let regNumbers = instance.getRegNumbers();
        div.innerHTML = ''
        regNumbers.forEach(element => {
            console.log(element);
            displayReg(element);
        });
       
        getRegNumber.value = "";
    }
})

function displayReg(RegNumber) {
    newDiv = document.createElement("li");
    var newContent = document.createTextNode(RegNumber);
    newDiv.appendChild(newContent);
    div.appendChild(newDiv);
}

showCity.addEventListener("click", function () {
    let selectedRadioBtn = document.querySelector("input[name='radioType']:checked")
    console.log(selectedRadioBtn.value);
    let filteredResults = instance.filtered(selectedRadioBtn.value);
    div.innerHTML = ''
    filteredResults.forEach(element => {
        console.log(element);
        displayReg(element);
    });



})