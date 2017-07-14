/**
 * Created by sazivalair on 7/13/17.
 */

import {expect} from 'chai';
import 'mocha';
import {TipCalculator} from "../src/TipCalculator";


describe("Basic test for TipCalculator", function () {

    let t: TipCalculator;

    beforeEach(function () {
        t = new TipCalculator();
    });

    afterEach(function () {
    });

    it("Should calculate the correct tip percentage", function () {

        let bill = 20;
        let percent = 0.15;
        let tip = TipCalculator.calculateTip(bill, percent);
        expect(tip).to.equal(20 * 0.15);

    });

    it("Should divide the bill evenly between guests", function () {

        let bill = 10;
        let guests = 5;
        let billPerGuest = t.divideBill(bill, guests);
        expect(billPerGuest).to.equal(bill / guests);

    });

    it("Should divide the tip evenly between guests", function () {

        let tip = 25;
        let guests = 2;
        let tipPerGuest = t.divideTip(tip, guests);
        expect(tipPerGuest).to.equal(tip / guests);

    });

    it("Should calculate the total bill and tip per guest", function () {
        let guests = 3;
        let bill = 87;
        let percent = 0.20;
        let totalPerGuest = t.totalPerGuest(bill, percent, guests);
        let expectedTotalPerGuest = (87 / 3) + ((87 * 0.20) / 3);
        expect(totalPerGuest).to.equal(expectedTotalPerGuest);
    });

});
