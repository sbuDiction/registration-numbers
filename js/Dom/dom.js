var getRegNumber = document.querySelector(".input");
var addBtn = document.querySelector(".addBtn");
//var show = document.querySelector(".di
var showCity = document.querySelector(".showBtn");
var div = document.getElementById("regList");
var radio = document.querySelector(".city")
var instance = RegNumbers();




function addElement() {

    if (getRegNumber.value != "") {
        // create a new div element 
        var newDiv = document.createElement("li");
        let items = instance.add(getRegNumber.value)
        var newContent = document.createTextNode(instance.one());
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
        // add the newly created element and its content into the DOM 
        var currentDiv = document.getElementById("regList");
        currentDiv.appendChild(newDiv);
        getRegNumber.value = "";
    }

}

function whichCity() {
    var radioBtn = document.querySelectorAll(".city");
    for (let i = 0; i < radioBtn.length; i++) {
        let elem = radioBtn[i];
        if (elem.checked) {
            if (elem.value === 'CA') {
                instance.cape()
                addElement()
            }
            if (elem.value === 'ND') {
                instance.durban();
                addElement()
            }
            if (elem.value === 'GP') {
                instance.jozi()
                addElement()
            }
            if (elem.value === 'NN') {
                instance.newCast()
            }
            if (elem.value === 'CY') {
                instance.belvile()
            }
            if(elem.value === ""){
                instance.one()
            }
        }
    }

}

//radio.onclick = function(){whichCity}
showCity.addEventListener("click", whichCity)
addBtn.addEventListener("click", addElement)
