describe('Registration Number Test' , function(){
    it('should return all registrations added in the screen' , function(){
        var instance = RegNumbers();
    
        instance.plate("GP 1234")
        instance.plate("CA 1234")
        instance.plate("CA 1234")
        instance.plate("CA 1234")
        assert.deepEqual(instance.plateNu(), ["GP 1234", "CA 1234", "CA 1234", "CA 1234"]);
        
    });

    it('should show or return the registrations numbers for only Durban' , function(){
        var instance = RegNumbers();
        instance.plate("ND 1234");
        instance.plate("ND 1234");
        instance.locate();
        assert.deepEqual(instance.ND(), ["ND 1234", "ND 1234"]);
        
    });

    it('should return only the registrations for cape town' , function(){
        var instance = RegNumbers();
    
        instance.plate("GP 1234","CapeTown");
        instance.plate("CA 1234","CapeTown");
        instance.plate("CA 1234","CapeTown");
        instance.plate("CA 1234","CapeTown");
        instance.locate();
        assert.deepEqual(instance.CA(),["CA 1234","CA 1234","CA 1234"]);
        
    });

    it('should return only the registrations numbers for Gauteng ' , function(){
        var instance = RegNumbers();
        instance.plate("CA 1234","Goli");
        instance.plate("CA 1234","Goli");
        instance.plate("GP 1234","Goli");
        instance.plate("GP 1234","Goli");
        instance.locate();
        assert.deepEqual(instance.GP(),["GP 1234","GP 1234"])
        
    });

});