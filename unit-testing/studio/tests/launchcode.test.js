// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  // Write your unit tests here!
  
  test('should return the string nonprofit as the value of organization', function() {
    expect(launchcode.organization).toEqual('nonprofit')
  });

  test('should return the string Jeff as the value of Executive Director', function() {
    expect(launchcode.executiveDirector).toEqual('Jeff')
  });

  test('should return a number 100 as the value for percentageCoolEmployees', function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100)
  });

  test('should return the values LC101, LaunchCode Women+, and CodeCamp for the value programsOffered', function() {
    expect(launchcode.programsOffered[0]).toEqual('LC101')
    expect(launchcode.programsOffered[1]).toEqual('LaunchCode Women+')
    expect(launchcode.programsOffered[2]).toEqual('CodeCamp')
    expect(launchcode.programsOffered.length).toEqual(3)
  });

});