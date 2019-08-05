const RegNumbers = () => {
    let regNumbers = [];
    let filteResults = [];
    let errorMessage = "";

    const addRegistration = (regNu) => {
        const upCase = regNu.toUpperCase()
        const regex = /[A-Z]{2}\s[0-9]{3}\s[0-9]{3}/gi;
        const regexExpression = regex.test(upCase)


        if (regexExpression === true) {
            errorMessage = "";
            if (!regNumbers.includes(upCase)) {
                regNumbers.push(upCase);
            } else {
                errorMessage = "Reg number already exists"
            }
        } else {
            // this is not a valid reg number...
            errorMessage = "Invalid reg number!!!"
        }
    }

    const filter = (townTag) => {
        filteResults = [];

        if (valid = false) {
            if (townTag === "" || townTag === undefined) {
                return regNumbers;
            }
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


    return {
        add: addRegistration,
        filtered: filter,
        getRegNumbers: getStoredRegistration,
        error: errorHandling,
    }
}