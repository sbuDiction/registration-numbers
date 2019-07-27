var getRegNumber = document.querySelector(".input");
var addBtn = document.querySelector(".addBtn");
var show = document.querySelector(".displayRe");
var chooseCity = document.getElementById("dropDown");
var div = document.getElementById("regList");
var instance = RegNumbers();

function addElement() {
    if(getRegNumber.value != ""){
        // create a new div element 
    var newDiv = document.createElement("li");
    instance.plate(getRegNumber.value)
    var newContent = document.createTextNode(instance.one());
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("regList");
    currentDiv.appendChild(newDiv);
    getRegNumber.value = "";

    }
}


function choose(){
    let selected = chooseCity.value;
    // if(selected === "durban"){
    //     instance.locate(instance.plateNu());
    // }
    
    var addList = document.createElement("li");
    var newList = document.createTextNode(instance.locate(instance.plateNu()))
    addList.appendChild(newList)
    var current = document.getElementById("city")
    current.appendChild(addList)

}


chooseCity.addEventListener("change", choose)
addBtn.addEventListener("click", addElement)