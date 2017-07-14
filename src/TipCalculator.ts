/**
 * Created by sazivalair on 7/13/17.
 */

export class TipCalculator {

    constructor() {
    }

    public static calculateTip(bill: number, percent: number): number {
        return bill * percent;
    }

    public divideBill(bill: number, guests: number): number {
        return bill / guests;
    }

    public divideTip(tip: number, guests: number): number {
        return tip / guests;
    }

    public totalPerGuest(bill: number, percent: number, guests: number): number {
        let tip = TipCalculator.calculateTip(bill, percent);
        let tipPerGuest = this.divideTip(tip, guests);
        let billPerGuest = this.divideBill(bill, guests);
        return tipPerGuest + billPerGuest;
    }

}