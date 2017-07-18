/**
 * Created by sazivalair on 7/13/17.
 */

import {expect} from 'chai';
import 'mocha';
import {TipCalculator, RoundingStyle} from "../src/TipCalculator";


describe("Basic test for TipCalculator", function () {

    let t: TipCalculator;

    beforeEach(function () {

    });

    afterEach(function () {
    });

    it("Should calculate the correct tip percentage", function () {
        let bill = 20;
        let percent = 0.15;

        let t = new TipCalculator(bill,1,percent);
        let tip = t.calculateTotalTip();
        expect(tip).to.equal(20 * 0.15);

    });

    it("Should divide the bill evenly between guests", function () {

        let bill = 10;
        let guests = 5;
        let t = new TipCalculator(bill,guests,0);
        let billPerGuest = t.splitBill();
        expect(billPerGuest).to.equal(bill / guests);

    });

    it("Should divide the tip evenly between guests", function () {

        let bill = 25;
        let tip = 0.20;
        let guests = 2;
        let t = new TipCalculator(bill,guests,tip);

        let tipPerGuest = t.divideTip();

        expect(tipPerGuest).to.equal(bill * tip / guests);

    });

    it("Should calculate the total bill and tip per guest for no rounding", function () {
        let guests = 3;
        let bill = 87;
        let percent = 0.20;
        let t = new TipCalculator(bill,guests,percent, RoundingStyle.NONE);
        let totalPerGuest = t.totalPerGuest();
        let expectedTotalPerGuest = (87 / 3) + ((87 * 0.20) / 3);
        expect(totalPerGuest).to.equal(expectedTotalPerGuest);
    });

    it("Should calculate the total bill and tip per guest for rounding up", function () {
        let guests = 3;
        let bill = 87;
        let percent = 0.20;
        let t = new TipCalculator(bill,guests,percent, RoundingStyle.UP);
        let totalPerGuest = t.totalPerGuest();

        expect(totalPerGuest).to.be.above(bill/guests);
        expect(totalPerGuest).to.be.above(bill*(1+percent)/guests);

        expect(totalPerGuest*guests).to.be.within(bill*(1+percent),bill*(1+percent)+1);

    });

    it("Should calculate the total bill and tip per guest for rounding down", function () {
        let guests = 3;
        let bill = 87;
        let percent = 0.20;
        let t = new TipCalculator(bill,guests,percent, RoundingStyle.DOWN);
        let totalPerGuest = t.totalPerGuest();

        expect(totalPerGuest).to.be.above(bill/guests);
        expect(totalPerGuest*guests).to.be.below(bill*(1+percent));

        expect(totalPerGuest*guests).to.be.closeTo(bill,bill*percent);

    });

});
