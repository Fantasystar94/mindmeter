"use strict";
class animation {
    constructor() {
        this.intro = document.querySelector('.intro');
        this.animationStart();
    }
    animationStart() {
        setTimeout(() => {
            var _a;
            (_a = this.intro) === null || _a === void 0 ? void 0 : _a.classList.add('off');
        }, 2000);
    }
}
const animationStart = new animation();
