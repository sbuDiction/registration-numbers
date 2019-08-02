var RegNumbers = function (numbers) {
    let regNumbers = numbers || [];
    let filteResults = []

    function addRegistration(regNu) {

        let upCase = regNu.toUpperCase()

        if (!regNumbers.includes(upCase)) {
            regNumbers.push(upCase);
        }
    };


    function filter(townTag) {
        filteResults = [];
        if (valid = true) {
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

    // getStoredRegistration = () => regNumbers;
    function getStoredRegistration() {
        return regNumbers;
    }
    return {
        add: addRegistration,
        filtered: filter,
        getRegNumbers: getStoredRegistration
    }
}