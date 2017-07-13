/**
 * Created by sazivalair on 7/13/17.
 */

export class TipCalculator {

    constructor() {

    }

    static calculateTip(bill: number, percent: number) : number {
        return bill * percent;

    }

    divideBill(bill: number, guests: number) : number {
        return bill / guests;
    }

    divideTip(tip: number, guests: number) : number {
        return tip / guests;
    }

    totalPerGuest(bill: number, percent: number, guests: number) : number {
        let tip = TipCalculator.calculateTip(bill, percent);
        let tipPerGuest = this.divideTip(tip, guests);
        let billPerGuest = this.divideBill(bill, guests);
        return tipPerGuest + billPerGuest;
    }


}