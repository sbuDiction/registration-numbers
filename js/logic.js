var RegNumbers = function (numbers) {
    let regNumbers = [];
    let capeTown = [];
    let Gauteng = [];
    let Durban = [];
    let Belvile = [];
    let newcastle = []
    let getPlateNu;

    function getRegNumber(regNu) {
        getPlateNu = regNu;

        if (regNumbers[regNu] === undefined) {
            regNumbers[regNu] = 0;
            regNumbers.push(regNu);
        }
    };

    function checkCapeTown() {
        for (let i = 0; i < regNumbers.length; i++) {
            let getCapeTown = regNumbers[i];
            if (getCapeTown.startsWith('CA')) {
                capeTown.push(getCapeTown);
            }
        }
        return capeTown;
    };

    function checkDurban() {
        for (let i = 0; i < regNumbers.length; i++) {
            let getDurban = regNumbers[i];
            if (getDurban.startsWith('ND')) {
                Durban.push(getDurban);
            }
        }
        return Durban;
    };

    function checkGauteng() {
        for (let i = 0; i < regNumbers.length; i++) {
            let getGauteng = regNumbers[i]
            if (getGauteng.endsWith('GP')) {
                Gauteng.push(getGauteng)
            }
        }
        return Gauteng;
    };

    function checkBelvile() {
        for (let i = 0; i < regNumbers.length; i++) {
            let getBelvile = regNumbers[i];
            if (getBelvile.startsWith('CY'));
            Belvile.push(getBelvile);
        }
        return Belvile;
    };

    function checkNewcastle() {
        for (let i = 0; i < regNumbers.length; i++) {
            let getNEw = regNumbers[i]
            if (getNEw.startsWith('NN')) {
                newcastle.push(getNEw)
            }
        }
        return newcastle;
    }

    function filtered(city) {
        city = "CA";
        let filteredArry = [];
         filteredArry = regNumbers.filter(function (items) {
             if(items.startsWith(city)){
                 filteredArry.push(items)
             }
            return filteredArry
        });
        console.log(filteredArry);
        
    }

    function displayAllCities() {
        return regNumbers;
    };

    function displayOnlyOne() {
        return getPlateNu;
    };
    // console.log(regNumbers);
    // console.log(capeTown);
    // console.log(Durban);
    // console.log(Gauteng);
    // console.log(newcastle);
    // console.log(Belvile);


    return {
        add: getRegNumber,
        cape: checkCapeTown,
        durban: checkDurban,
        jozi: checkGauteng,
        belvile: checkBelvile,
        newCast: checkNewcastle,
        filter: filtered,
        all: displayAllCities,
        one: displayOnlyOne,
    }
}