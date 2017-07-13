"use strict";
/**
 * Created by sazivalair on 7/13/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TipCalculator = (function () {
    function TipCalculator() {
    }
    TipCalculator.calculateTip = function (bill, percent) {
        return bill * percent;
    };
    TipCalculator.prototype.divideBill = function (bill, guests) {
        return bill / guests;
    };
    TipCalculator.prototype.divideTip = function (tip, guests) {
        return tip / guests;
    };
    TipCalculator.prototype.totalPerGuest = function (bill, percent, guests) {
        var tip = TipCalculator.calculateTip(bill, percent);
        var tipPerGuest = this.divideTip(tip, guests);
        var billPerGuest = this.divideBill(bill, guests);
        return tipPerGuest + billPerGuest;
    };
    return TipCalculator;
}());
exports.TipCalculator = TipCalculator;
