describe('Registration Number Test', function () {
    it('should show or return the registrations numbers for only Durban', function () {
        let instance = RegNumbers();
        instance.add("ND 123 412");
        instance.add("GP 123 423");

        assert.deepEqual(instance.filtered("ND"), ["ND 123 412"]);

    });

    it('should return only the registrations for cape town', function () {
        let instance = RegNumbers();

        instance.add("GP 123 434");
        instance.add("ND 123 434");
        instance.add("NN 123 434");
        instance.add("CA 123 434");

        assert.deepEqual(instance.filtered("CA"), ["CA 123 434"]);

    });

    it('should return only the registrations numbers for Gauteng ', function () {
        let instance = RegNumbers();
        instance.add("CA 123 254");
        instance.add("CA 123 254");
        instance.add("GP 123 254");


        assert.deepEqual(instance.filtered("GP"), ["GP 123 254"])

    });

    it('should check for duplicates and only show one plate number if its entered twice ', function () {
        let instance = RegNumbers();
        instance.add("CA 123 565");
        instance.add("CA 123 565");
        instance.add("CA 123 565");


        assert.deepEqual(instance.filtered("CA"), ["CA 123 565"])

    });

    it('should return only the registration number from Newcastle', function () {
        let instance = RegNumbers();
        instance.add("NN 123 325");
        instance.add("CA 123 325");


        assert.deepEqual(instance.filtered("NN"), ["NN 123 325"])

    });

    it('should check if the number plate exists and if not it should return an empty array', function () {
        let instance = RegNumbers();
        instance.add("GP 123 765");
        instance.add("CY 123 765");


        assert.deepEqual(instance.filtered("NN"), [])

    });
});
describe('Testing Filter function', function () {
    it('should return only the registration number for the filtered town', function () {
        let instance = RegNumbers();
        instance.add("NN 123 875");
        instance.add("CA 123 875");

        console.log(instance.filtered());
        assert.deepEqual(instance.filtered("CA"), ["CA 123 875"])


    });
});

describe('Testing Regex pattern expression', function () {
    it('should only take a number plate that is valid or with correct style', function () {
        let instance = RegNumbers();
        instance.add("NN 123875");
        instance.add("CA 123 875");

        console.log(instance.filtered());
        assert.deepEqual(instance.getRegNumbers(), ["CA 123 875"])


    });

    it('should only take a number plate with "6" digits seperate with space in between eg("CA 123 244")', function () {
        let instance = RegNumbers();
        instance.add("CA 23 875");

        console.log(instance.filtered());
        assert.deepEqual(instance.getRegNumbers(), [])


    });

    it('should not take in a number plate with numbers only without city tag eg("CA","CY")', function () {
        let instance = RegNumbers();
        instance.add("23 875");

        console.log(instance.filtered());
        assert.deepEqual(instance.getRegNumbers(), [])


    });
});
