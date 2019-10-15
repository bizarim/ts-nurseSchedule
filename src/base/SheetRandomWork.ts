import { eWork, eDayOfWeek } from './enums';
import { ParamWorkerOfDay } from './ParamGenerate';

export class SheetRandomWork {
    sheet: number[];
    private bInit: boolean = false;
    private day: number;
    initalize(param: ParamWorkerOfDay, cntNurse: number, day: number) {
        if (undefined === param) throw new Error('undefined === param');
        if (true === this.bInit) return;
        this.day = day;
        const cntWithOutOff = param.day + param.eve + param.night;
        if (cntNurse <= cntWithOutOff) throw new Error('cntNurse <= cntWithOutOff');
        const cntOff = cntNurse - cntWithOutOff;
        this.sheet = [];

        for (let i = 0; i < param.day; ++i) {
            this.sheet.push(eWork.day);
        }
        for (let i = 0; i < param.eve; ++i) {
            this.sheet.push(eWork.eve);
        }
        for (let i = 0; i < param.night; ++i) {
            this.sheet.push(eWork.night);
        }
        for (let i = 0; i < cntOff; ++i) {
            this.sheet.push(eWork.off);
        }
        this.bInit = true;
    }

    select(): eWork {
        if (0 === this.sheet.length) throw new Error('select: out of sheet length');
        const index = this.getRandomInt(0, this.sheet.length - 1);
        const selected = this.sheet[index];
        this.sheet.splice(index, 1);
        return selected;
    }

    selectWithOut(work: eWork): eWork {
        if (0 === this.sheet.length) throw new Error('selectWithOut: out of sheet length');
        let selected = 0;
        while (true) {
            const index = this.getRandomInt(0, this.sheet.length - 1);
            selected = this.sheet[index];
            if (work !== selected) {
                this.sheet.splice(index, 1);
                break;
            }

        }
        return selected;
    }

    choose(work: eWork): eWork {
        if (0 === this.sheet.length) throw new Error('choose: out of sheet length');
        let index = 0;
        for (let i = 0; i < this.sheet.length; ++i) {
            if (work === this.sheet[i]) {
                index = i;
                break;
            }
        }
        const selected = this.sheet[index];
        this.sheet.splice(index, 1);
        return selected;
    }



    firstNurse(): eWork {
        let work: eWork = eWork.day;
        switch (this.day) {
            case eDayOfWeek.sun:
            case eDayOfWeek.sat:
                work = eWork.off;
                break;
            default:
                work = eWork.day;
                break;
        }
        return this.choose(work);
    }

    private getRandomInt(min: number, max: number) {
        const cmin = Math.ceil(min);
        const cmax = Math.floor(max);
        return Math.floor(Math.random() * (cmax - cmin + 1)) + cmin;
    }
    release() {
        delete this.sheet;
        this.bInit = false;
    }
}