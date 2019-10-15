"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CalendarDate {
    static getDaysOfWeek(toYear, toMonth) {
        const list = [];
        const lastDay = CalendarDate.getLastDay(toYear, toMonth);
        for (let i = 0; i < lastDay; ++i) {
            const date = new Date(toYear, toMonth, i + 1);
            const day = date.getDay() + 1; // Sunday - Saturday : 0 - 6
            list.push(day);
        }
        return list;
    }
    static getDayCount(toYear, toMonth) {
        const list = [];
        const lastDay = CalendarDate.getLastDay(toYear, toMonth);
        for (let i = 0; i < lastDay; ++i) {
            list.push(i + 1);
        }
        return list;
    }
    static getLastDay(toYear, toMonth) {
        return new Date(toYear, toMonth, 0).getDate();
    }
}
exports.CalendarDate = CalendarDate;
//# sourceMappingURL=CalendarDate.js.map