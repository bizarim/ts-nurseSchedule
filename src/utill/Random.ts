export class Random {
    static nextInt(min: number, max: number) {
        const cmin = Math.ceil(min);
        const cmax = Math.floor(max);
        return Math.floor(Math.random() * (cmax - cmin + 1)) + cmin;
    }
}