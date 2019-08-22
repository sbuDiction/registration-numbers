let getEnteredValue = document.querySelector(".inputTemplate");
let addButton = document.querySelector(".addTemplate");
let showButtonCity = document.querySelector(".showBtnTemplate");
let radioTemplate = document.querySelector(".city");
let erroMsg = document.getElementById("templateError");
let setMaximum = document.getElementById("inputTemplate");
let template = document.querySelector(".userDataTemplate").innerHTML;
let compiledTemp = Handlebars.compile(template);
let templateData = document.querySelector(".regs");
let clearElem = document.querySelector(".clearList")

let plateStore
if (localStorage['template']) {
    plateStore = JSON.parse(localStorage['template']);
} else {
    plateStore = [];
}

let instanceReg = RegNumbers(plateStore);

//error msg 
if (getEnteredValue.value === "") {
    erroMsg.innerHTML = "Please add number plate to register";
    erroMsg.classList.remove("alert")
    erroMsg.classList.add("alert")
}

//setting the input max
setMaximum.addEventListener("input", function () {
    if (setMaximum.maxLength = "10") {
        erroMsg.classList.add("example");
        erroMsg.innerHTML = "eg('CA 123 344')";
    }
})

//add button event for when clicked
addButton.addEventListener("click", function () {
    instanceReg.add(getEnteredValue.value);
    erroMsg.innerHTML = instanceReg.error();
    makeRegNumbers(instanceReg.getRegNumbers());
    getEnteredValue.value = "";
    window.localStorage.setItem("template", JSON.stringify(instanceReg.getRegNumbers()));
})

//event for the filter to filter between different towns.
showButtonCity.addEventListener("click", function () {
    radioTemplate = document.querySelector("input[name='template']:checked")
    if (!radioTemplate) {
        erroMsg.innerHTML = "Please select town!"
    }
    let filteredTemplate = instanceReg.filtered(radioTemplate.value);
    makeRegNumbers(filteredTemplate)
})
//create a list element with a licince plate on function call.
const makeRegNumbers = (reg) => {
    let plateData = { plateNumber: reg }
    
    let displayData = compiledTemp(plateData)
    templateData.innerHTML = displayData
}
//reload the plates on every page load.
let updateTemplate = instanceReg.filtered(radioTemplate.value)
makeRegNumbers(updateTemplate);