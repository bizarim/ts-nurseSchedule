import { eWork } from './enums';
import { ParamWorkerOfDay } from './ParamGenerate';
export declare class SheetRandomWork {
    sheet: number[];
    private bInit;
    private day;
    initalize(param: ParamWorkerOfDay, cntNurse: number, day: number): void;
    select(): eWork;
    selectWithOut(work: eWork): eWork;
    choose(work: eWork): eWork;
    firstNurse(): eWork;
    private getRandomInt;
    release(): void;
}
