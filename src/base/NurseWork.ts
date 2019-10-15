export class NurseWork {
    index: number;
    hasOff: number;
    nightTerm: number;
        month: number[];
    constructor(index: number) {
        this.index = index;
        this.hasOff = 0;
        this.nightTerm = 0;
        this.month = [];
    }
}