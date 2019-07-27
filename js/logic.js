var RegNumbers = function () {
    let regNumbers = [];
    let capeTown = [];
    let Gauteng = [];
    let Durban = [];
    let getPlateNu;

    function getRegNumber(regNu) {
        getPlateNu = regNu;
        regNumbers.push(regNu)
    };

    function witchCity() {
        for (let i = 0; i < regNumbers.length; i++) {
            let check = regNumbers[i];
            if (check.startsWith('CA')) {
                capeTown.push(check);
            } else if (check.startsWith('GP')) {
                Gauteng.push(check);
            }
            if (check.startsWith('ND')) {
                Durban.push(check);
            }
        };
    };

    function display() {
        return regNumbers;
    }

    function displayCA() {
        return capeTown;
    }

    function displayGP() {
        return Gauteng;
    }

    function displayND() {
        return Durban;
    }

    function onlyOne(){
        return getPlateNu
    }
console.log(regNumbers);
console.log(capeTown);


    return {
        plate: getRegNumber,
        plateNu: display,
        CA: displayCA,
        GP: displayGP,
        ND: displayND,
        locate: witchCity,
        one: onlyOne,
    }
}