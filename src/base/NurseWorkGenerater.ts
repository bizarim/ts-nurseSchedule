import { ParamGenerate } from './ParamGenerate';
import { CalendarDate } from '../utill/CalendarDate';
import { SheetRandomWork } from './SheetRandomWork';
import { eWork, eDayOfWeek } from './enums';
import { Random } from '../utill/Random';
import { NurseWork } from './NurseWork';

export class NurseWorkGenerater {
    private param: ParamGenerate;
    private bInit: boolean = false;
    private lastDay: number;
    private daysOfWeek: number[];
    private totCntOff: number;
    initailize(param: ParamGenerate) {
        this.param = param;

        this.lastDay = CalendarDate.getLastDay(this.param.toYear, this.param.toMonth);
        this.daysOfWeek = CalendarDate.getDaysOfWeek(this.param.toYear, this.param.toMonth);
        const cntNurse = this.param.cntNurse;
        const cnt = 0;
        for (let i = 0; i < this.param.list.length; ++i) {

        }



        this.bInit = true;
    }

    create() {
        if (false === this.bInit) return;
        const cntContinueNight = this.param.cntContinueNight;
        const cntMaxNight = this.param.cntMaxNight;
        const cntModifyTerm = this.param.cntModifyTerm;
        const cntNurse = this.param.cntNurse;

        let cntWorking = 0;
        for (let i = 0; i < this.daysOfWeek.length; ++i) {
            const day = this.daysOfWeek[i] - 1;
            cntWorking += this.param.list[day].day;
            cntWorking += this.param.list[day].eve;
            cntWorking += this.param.list[day].night;
        }

        this.totCntOff = (this.lastDay * cntNurse) - cntWorking;

        const argOff = Math.floor(this.totCntOff / cntNurse);
        const extraOff = this.totCntOff % cntNurse;

        const tNurseWorks: { [nurse: number]: NurseWork; } = {};
        for (let i = 0; i < cntNurse; ++i) {
            if (undefined === tNurseWorks[i]) {
                tNurseWorks[i] = new NurseWork(i);
                tNurseWorks[i].hasOff = argOff;
            }
        }

        // have off 설정

        // // create month
        // for (let dayIndex = 0; dayIndex < this.lastDay; ++dayIndex) {
        //     // create day nurse

        //     const day = this.daysOfWeek[dayIndex];

        //     const ranSheet = new SheetRandomWork();
        //     ranSheet.initalize(this.param.list[day - 1], cntNurse, day);

        //     // 수 간호사
        //     {
        //         const nurseOfWork: NurseWork = tNurseWorks[0];
        //         const work = ranSheet.firstNurse();  // 수간호사
        //         nurseOfWork.month.push(work);
        //     }

        //     // 간호사 work 선 처리
        //     for (let nurseIndex = 0; nurseIndex < cntNurse; ++nurseIndex) {
        //         const nurseOfWork: number[] = tMonth[nurseIndex];
        //         if (nurseIndex === 0) continue;
        //         // 1일차 생성
        //         if (0 === dayIndex) {
        //             const work = ranSheet.select();              // 수간호사 아닌
        //             nurseOfWork.push(work);
        //         } else {
        //             if (eWork.night !== nurseOfWork[dayIndex - 1]) continue;
        //             // 전날 나이트 였을 때
        //             if (cntContinueNight <= dayIndex) {
        //                 let sumContiueNight = 0;
        //                 // 여기 연속 cntContinueNight check
        //                 for (let pp = 0; pp < cntContinueNight; ++pp) {
        //                     if (eWork.night === nurseOfWork[dayIndex - pp - 1]) {
        //                         sumContiueNight += eWork.night;
        //                     }
        //                 }
        //                 if (sumContiueNight == (eWork.night * cntContinueNight)) {
        //                     const work = ranSheet.choose(eWork.off);
        //                     nurseOfWork.push(work);
        //                     ++nurseTerm[nurseIndex];
        //                 } else {
        //                     const work = ranSheet.choose(eWork.night);
        //                     nurseOfWork.push(work);
        //                 }
        //             } else {
        //                 // 나이트 연속
        //                 const work = ranSheet.choose(eWork.night);
        //                 nurseOfWork.push(work);
        //             }

        //         }
        //     }

        //     // 연속 일수 포함 하고 있는 간호사 선처리
        //     for (let nurseIndex = 0; nurseIndex < cntNurse; ++nurseIndex) {
        //         const nurseOfWork: number[] = tMonth[nurseIndex];
        //         if (undefined !== nurseOfWork[dayIndex]) continue;  // 선처리 진행 한 경우는 패스

        //         const ran = Random.nextInt(0, 2);
        //         if (0 < nurseTerm[nurseIndex] && nurseTerm[nurseIndex] < cntModifyTerm) {
        //             ++nurseTerm[nurseIndex];
        //             const work = ranSheet.selectWithOut(eWork.night);
        //             nurseOfWork.push(work);
        //         }
        //     }

        //     // 선택 안된 간호사 후 처리
        //     for (let nurseIndex = 0; nurseIndex < cntNurse; ++nurseIndex) {
        //         const nurseOfWork: number[] = tMonth[nurseIndex];
        //         if (undefined !== nurseOfWork[dayIndex]) continue;  // 선처리 진행 한 경우는 패스

        //         nurseTerm[nurseIndex] = 0;
        //         const work = ranSheet.choose(eWork.night);
        //         nurseOfWork.push(work);
        //     }
        // }
        // console.log(JSON.stringify(tMonth));

        // for (let nurseIndex = 0; nurseIndex < cntNurse; ++nurseIndex) {

        //     const nurseOfWork: number[] = tMonth[nurseIndex];
        //     let cnt = 0;
        //     for (let dayIndex = 0; dayIndex < this.lastDay; ++dayIndex) {

        //         if (undefined === nurseOfWork[dayIndex]) continue;  // 선처리 진행 한 경우는 패스
        //         if (nurseOfWork[dayIndex] === eWork.off)++cnt;
        //     }
        //     console.log(`nurse[${nurseIndex}]: ${cnt}`);
        // }
    }
}