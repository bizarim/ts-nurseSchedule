"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Random {
    static nextInt(min, max) {
        const cmin = Math.ceil(min);
        const cmax = Math.floor(max);
        return Math.floor(Math.random() * (cmax - cmin + 1)) + cmin;
    }
}
exports.Random = Random;
//# sourceMappingURL=Random.js.map