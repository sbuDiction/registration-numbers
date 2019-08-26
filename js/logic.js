const RegNumbers = (number) => {
    let regNumbers = number || [];
    let filteResults = [];
    let errorMessage = "";


    const addRegistration = (regNu) => {
        const upCase = regNu.toUpperCase()
        const regex = /[A-Z]{2}\s[0-9]{3}\s[0-9]{3}/gi;
        const regexNonExpression = /[0-9]{3}\s[0-9]{3}\s[A-Z]{2}/gi;
        const anyNonRegex = /[A-Z]{2}\s[0-9]{3}\S[0-9]{3}/gi;
        const onlyThreeExpre = /[A-Z]{2}\s[0-9]{3}/gi;
        const onlyFourExpree = /[A-Z]{2}[0-9]{4}/gi;
        const regexExpression = regex.test(upCase);
        const unOrderedRegex = regexNonExpression.test(upCase);
        const nonTest = anyNonRegex.test(upCase);
        const onlyTest = onlyThreeExpre.test(upCase);
        const only4Test = onlyFourExpree.test(upCase);

        if (regexExpression === true || unOrderedRegex === true || nonTest === true || onlyTest === true || only4Test === true) {
            errorMessage = "added!!!";
            if (upCase.startsWith("CA") || upCase.startsWith("NN") || upCase.endsWith("GP") || upCase.startsWith("CY") || upCase.startsWith("NN")) {
                if (!regNumbers.includes(upCase)) {
                    regNumbers.push(upCase);
                }else{
                    errorMessage = "Reg number already exist!"
                }
            }
            else {
                errorMessage = "Reg number not valid"
            }

        } else {
            errorMessage = "Invalid reg number!!!"
        }
    }


    const filter = (townTag) => {
        filteResults = [];
        if (townTag === "" || townTag === undefined) {
            return regNumbers;
        }
        for (let i = 0; i < regNumbers.length; i++) {

            if (regNumbers[i].startsWith(townTag)) {
                filteResults.push(regNumbers[i]);
            } else if (regNumbers[i].endsWith(townTag)) {
                filteResults.push(regNumbers[i])
            }
        }
        return filteResults;
    }


    const getStoredRegistration = () => regNumbers;

    const errorHandling = () => errorMessage;

    const clearList = () =>{
        regNumbers = [];
    }


    return {
        add: addRegistration,
        filtered: filter,
        getRegNumbers: getStoredRegistration,
        error: errorHandling,
        clear: clearList,
    }
}