"use strict";
class headerImport {
    constructor() {
        this.headerDiv = `
    <div class="headerSection">
        <h2 class="title">너 얼마나 T 야?!</h2>
    </div>`;
        this.headerDom = document.querySelector('header');
        this.init();
    }
    init() {
        if (this.headerDom) {
            this.headerDom.innerHTML = this.headerDiv;
        }
    }
}
const headerInit = new headerImport;
