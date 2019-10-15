export class CalendarDate {
    static getDaysOfWeek(toYear: number, toMonth: number): Array<number> {
        const list: number[] = [];
        const lastDay = CalendarDate.getLastDay(toYear, toMonth);
        for (let i = 0; i < lastDay; ++i) {
            const date = new Date(toYear, toMonth, i + 1);
            const day = date.getDay() + 1;  // Sunday - Saturday : 0 - 6
            list.push(day);
        }
        return list;
    }

    static getDayCount(toYear: number, toMonth: number): Array<number> {
        const list: number[] = [];
        const lastDay = CalendarDate.getLastDay(toYear, toMonth);
        for (let i = 0; i < lastDay; ++i) {
            list.push(i + 1);
        }
        return list;
    }

    static getLastDay(toYear: number, toMonth: number): number {
        return new Date(toYear, toMonth, 0).getDate();
    }
}