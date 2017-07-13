"use strict";
/**
 * Created by sazivalair on 7/13/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var TipCalculator_1 = require("../src/TipCalculator");
describe("Basic test for TipCalculator", function () {
    var t;
    beforeEach(function () {
        t = new TipCalculator_1.TipCalculator();
    });
    afterEach(function () {
        t = null;
    });
    it("Should calculate the correct tip percentage", function () {
        var bill = 20;
        var percent = 0.15;
        var tip = TipCalculator_1.TipCalculator.calculateTip(bill, percent);
        chai_1.expect(tip).to.equal(20 * 0.15);
    });
    it("Should divide the bill evenly between guests", function () {
        var bill = 10;
        var guests = 5;
        var billPerGuest = t.divideBill(bill, guests);
        chai_1.expect(billPerGuest).to.equal(bill / guests);
    });
    it("Should divide the tip evenly between guests", function () {
        var tip = 25;
        var guests = 2;
        var tipPerGuest = t.divideTip(tip, guests);
        chai_1.expect(tipPerGuest).to.equal(tip / guests);
    });
    it("Should calculate the total bill and tip per guest", function () {
        var guests = 3;
        var bill = 87;
        var percent = 0.20;
        var totalPerGuest = t.totalPerGuest(bill, percent, guests);
        var expectedTotalPerGuest = (87 / 3) + ((87 * 0.20) / 3);
        chai_1.expect(totalPerGuest).to.equal(expectedTotalPerGuest);
    });
});
