const testFive = require('../checkFive.js');

describe("checkFive", function() {

    test("should return 'num is less than 5' when num < 5.", function() {
        let output = testFive(2);
        expect(output).toBe("2 is less than 5.");
    });


    test("should return 'num is equal to 5' when num = 5.", function() {
        let output = testFive(5);
        expect(output).toBe("5 is equal to 5.");
    });

    
    test("should return 'num is greater than 5' when num > 5.", function() {
        let output = testFive(10);
        expect(output).toBe("10 is greater than 5.");
    });

});