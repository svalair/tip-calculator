/**
 * Created by sazivalair on 7/13/17.
 */

export enum RoundingStyle {
    UP, DOWN, DEFAULT, NONE
}


export class TipCalculator {


    bill : number; // in dollars
    guests : number;
    rounding : RoundingStyle;
    tip : number; // in percent



    constructor(bill : number, guests : number, tip : number, rounding = RoundingStyle.DEFAULT) {
        this.bill = bill;
        this.guests = guests;
        this.tip = tip;
        this.rounding = rounding;
    }



    public calculateTotalTip() : number {
        return this.bill * this.tip;
    }

    public splitBill() : number {
        return this.bill / this.guests;
    }

    public divideTip(): number {
        return this.calculateTotalTip() / this.guests;
    }

    public totalPerGuest() : number {
        let tipPerGuest = this.divideTip();
        let billPerGuest = this.splitBill();
        return this.round(tipPerGuest + billPerGuest);
    }


    private round(num : number) : number {
        switch (this.rounding) {
            case (RoundingStyle.UP):
                return Math.ceil(num);
            case (RoundingStyle.DOWN):
                return Math.floor(num);
            case (RoundingStyle.NONE):
                return num;
            case (RoundingStyle.DEFAULT):
            default:
                if (num - Math.floor(num) >= 0.5) {
                    return Math.ceil(num);
                } else {
                    return Math.floor(num);
                }

        }
    }

}