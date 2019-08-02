let getRegNumber = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let showCity = document.querySelector(".showBtn");
let div = document.getElementById("regList");
let radio = document.querySelector(".city");
let radioBtn = document.querySelectorAll(".city");
let erroElement = document.querySelector("error")
let newDiv;

let instance = RegNumbers()

addBtn.addEventListener("click", function () {

        if (getRegNumber.value != "") {
            instance.add(getRegNumber.value);
            let regNumbers = instance.getRegNumbers();
            //  localStorage.setItem("RegNumbers", instance.getRegNumbers())
            div.innerHTML = '';
            regNumbers.forEach(element => {
                console.log(element);
                displayReg(element);
            });
            localStorage["item"] = JSON.stringify(instance.getRegNumbers())
            getRegNumber.value = "";

        }
        erroMsg();

    }

)


function erroMsg() {
    if (getRegNumber.value === "") {
        erroElement.innerHTML = "Please enter licence plate";
    }
}
console.log(erroElement.innerHTML);

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