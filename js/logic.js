const RegNumbers = () => {
    let regNumbers = [];
    let filteResults = []

    const addRegistration = (regNu) => {
        const upCase = regNu.toUpperCase()
        const regex = /[A-Z]{2}\s[0-9]{3}\s[0-9]{3}/gi;
        const regexExpression = regex.test(upCase)

        if (regexExpression === true) {
            if (!regNumbers.includes(upCase)) {
                regNumbers.push(upCase);
            }
        } console.log(regNumbers);
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

    const errorHandling = (numberTest) => {
        if (numberTest === "") {
            return "stop"
        }
    }

    return {
        add: addRegistration,
        filtered: filter,
        getRegNumbers: getStoredRegistration,
        error: errorHandling,
    }
}