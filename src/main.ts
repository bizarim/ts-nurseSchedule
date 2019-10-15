import { CalendarDate } from './utill/CalendarDate';
import { NurseWorkGenerater } from './base/NurseWorkGenerater';
import { eDayOfWeek, eWork } from './base/enums';
import { ParamWorkerOfDay } from './base/ParamGenerate';

const settings: ParamWorkerOfDay[] = [];
settings.push({ day: 2, eve: 2, night: 2 });    // 0: sun
settings.push({ day: 2, eve: 2, night: 2 });    // 1: mon
settings.push({ day: 2, eve: 2, night: 2 });    // 2: tue
settings.push({ day: 2, eve: 2, night: 2 });    // 3: wed
settings.push({ day: 2, eve: 2, night: 2 });    // 4: thu
settings.push({ day: 2, eve: 2, night: 2 });    // 5: fri
settings.push({ day: 2, eve: 2, night: 2 });    // 6: sat

for (let i = 0; i < 1; ++i) {
    const a = new NurseWorkGenerater();
    a.initailize({
        toYear: 2019,
        toMonth: 11,
        argOff: 0,
        cntNurse: 9,
        cntContinueNight: 3,
        cntMaxNight: 4,
        cntModifyTerm: 9,
        list: settings
    });


    a.create();
}
