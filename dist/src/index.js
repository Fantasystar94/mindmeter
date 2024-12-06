"use strict";
const questions = document.querySelectorAll('.question');
class QuestionHandle {
    constructor(questions) {
        this.questions = questions;
        this.countingAll = 0;
        this.paging = 0;
        this.del = document.querySelector('.del');
        this.submit = document.querySelector('.submit');
        this.questions = questions;
        this.init();
        this.storedList = {};
        this.addDelListener();
        this.calculObj();
    }
    init() {
        this.questions.forEach((item, index) => {
            this.handleInput(item, index);
        });
    }
    handleInput(item, index) {
        const inputElement = item.querySelectorAll('input');
        inputElement.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.storeObj(String(item.getAttribute('name')), Number(item.getAttribute('value')));
                if (this.paging + 1 >= this.questions.length) {
                    alert('마지막 문제입니다 제출하기를 눌러주세요!');
                    return;
                }
                else {
                    this.questions[this.paging].classList.remove('on');
                    this.paging += 1;
                    this.questions[this.paging].classList.add('on');
                }
                console.log(this.storedList);
            });
        });
    }
    addDelListener() {
        if (this.del) {
            this.del.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.paging === 0) {
                    alert('뒤로 갈 수 없습니다');
                }
                else {
                    this.questions[this.paging].classList.remove('on');
                    this.paging -= 1;
                    if (this.paging >= 0) {
                        this.questions[this.paging].classList.add('on');
                    }
                }
            });
        }
    }
    storeObj(name, item) {
        this.storedList[name] = item;
    }
    calculObj() {
        var _a;
        (_a = this.submit) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            if (this.paging + 1 >= this.questions.length) {
                this.countingAll = Object.values(this.storedList).reduce((acc, value) => acc + value, 0);
                window.location.href = `/public/result.html?counting=${this.countingAll}`;
            }
            else {
                alert('문제에 모두 답변 후 제출해주세요!');
            }
        });
    }
}
const start = new QuestionHandle(questions);
