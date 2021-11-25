let MyClass = require("../src/myclass.js");
let MyObj = new MyClass();
var chai = require('chai');
var expect = chai.expect;

 describe("Test suit", function() {
    it("Test the add method", function() {
    expect(MyObj.add(1,2)).to.be.equal(3);
    });
});