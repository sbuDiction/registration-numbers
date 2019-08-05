var RegNumbers = function () {
    let regNumbers = [];
    let filteResults = []

    function addRegistration(regNu) {

        let upCase = regNu.toUpperCase()
        let regex = /[A-Z]{2}\s[0-9]{3}\s[0-9]{3}/gi;
        let runRegex = regex.test(upCase)

        if (runRegex === true) {
            if (!regNumbers.includes(upCase)) {
                regNumbers.push(upCase);
            }
        }
        console.log(regNumbers);
    };
    function filter(townTag) {
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
    };

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