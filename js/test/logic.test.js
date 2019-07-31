describe('Registration Number Test' , function(){
    it('should show or return the registrations numbers for only Durban' , function(){
        let instance = RegNumbers();
        instance.add("ND 1234");
        instance.add("GP 1234");

        assert.deepEqual(instance.durban(), ["ND 1234"]);
        
    });

    it('should return only the registrations for cape town' , function(){
        let instance = RegNumbers();
    
        instance.add("GP 1234");
        instance.add("ND 1234");
        instance.add("NN 1234");
        instance.add("CA 1234");

        assert.deepEqual(instance.cape(),["CA 1234"]);
        
    });

    it('should return only the registrations numbers for Gauteng ' , function(){
        let instance = RegNumbers();
        instance.add("CA 1234");
        instance.add("CA 1234");
        instance.add("1234 GP");
        

        assert.deepEqual(instance.jozi(), ["1234 GP"])
        
    });

    it('should check for duplicates and only show one plate number if its entered twice ' , function(){
        let instance = RegNumbers();
        instance.add("CA 1235");
        instance.add("CA 1235");
        instance.add("CA 1235");
        

        assert.deepEqual(instance.one(),"CA 1235")
        
    });

    it('should return only the registration number from Newcastle' , function(){
        let instance = RegNumbers();
        instance.add("NN 1235");
        instance.add("CA 1235");
        

        assert.deepEqual(instance.newCast(),["NN 1235"])
        
    });

    it('should return only the registration number from Newcastle' , function(){
        let instance = RegNumbers();
        instance.add("GP 1235");
        instance.add("CY 1235");
        

        assert.deepEqual(instance.belvile(),["NN 1235"])
        
    });
});
    describe('Testing Filter function' , function(){
    it('should return only the registration number from Newcastle' , function(){
        let instance = RegNumbers();
        instance.add("NN 1235");
        instance.add("CA 1235");
        
        instance.filter('CA')
        assert.deepEqual(instance.all(),[""])
        
    });
});
