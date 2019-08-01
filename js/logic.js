var RegNumbers = function (numbers) {
    let regNumbers = [];
    let filteResults = []

    function addRegistration(regNu) {
        if (!regNumbers.includes(regNu)) {
            regNumbers.push(regNu);
        }
    };

    function filter(townTag) {
        filteResults = [];
        if (townTag === "" || townTag === undefined) {
            return regNumbers;
        }

        for (let i = 0; i < regNumbers.length; i++) {

            if (regNumbers[i].startsWith(townTag)) {
                filteResults.push(regNumbers[i]);
            }
        }
        return filteResults;
    };
    getStoredRegistration = () => regNumbers;





    return {
        add: addRegistration,
        filtered: filter,
        getRegNumbers: getStoredRegistration
    }
}