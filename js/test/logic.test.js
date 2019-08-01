describe('Registration Number Test' , function(){
    it('should show or return the registrations numbers for only Durban' , function(){
        let instance = RegNumbers();
        instance.add("ND 1234");
        instance.add("GP 1234");

        assert.deepEqual(instance.filtered("ND"), ["ND 1234"]);
        
    });

    it('should return only the registrations for cape town' , function(){
        let instance = RegNumbers();
    
        instance.add("GP 1234");
        instance.add("ND 1234");
        instance.add("NN 1234");
        instance.add("CA 1234");

        assert.deepEqual(instance.filtered("CA"),["CA 1234"]);
        
    });

    it('should return only the registrations numbers for Gauteng ' , function(){
        let instance = RegNumbers();
        instance.add("CA 1234");
        instance.add("CA 1234");
        instance.add("GP 1234");
        

        assert.deepEqual(instance.filtered("GP"), ["GP 1234"])
        
    });

    it('should check for duplicates and only show one plate number if its entered twice ' , function(){
        let instance = RegNumbers();
        instance.add("CA 1235");
        instance.add("CA 1235");
        instance.add("CA 1235");
        

        assert.deepEqual(instance.filtered("CA"),["CA 1235"])
        
    });

    it('should return only the registration number from Newcastle' , function(){
        let instance = RegNumbers();
        instance.add("NN 1235");
        instance.add("CA 1235");
        

        assert.deepEqual(instance.filtered("NN"),["NN 1235"])
        
    });

    it('should check if the number plate exists and if not it should return an empty array' , function(){
        let instance = RegNumbers();
        instance.add("GP 1235");
        instance.add("CY 1235");
        

        assert.deepEqual(instance.filtered("NN"),[])
        
    });
});
    describe('Testing Filter function' , function(){
    it('should return only the registration number from Newcastle' , function(){
        let instance = RegNumbers();
        instance.add("NN 1235");
        instance.add("CA 1235");
        
        console.log(instance.filtered());
        assert.deepEqual(instance.filtered(),["NN 1235","CA 1235"])
        
        
    });
});
