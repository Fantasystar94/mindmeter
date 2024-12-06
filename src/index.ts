const questions: NodeListOf<Element> = document.querySelectorAll('.question');

class QuestionHandle {
    private countingAll :number = 0;
    private paging:number = 0;
    private del:Element|null = document.querySelector('.del');
    private storedList: Record<string, number> ;
    private submit:Element|null = document.querySelector('.submit');
    constructor(private questions: NodeListOf<Element>){
        this.questions = questions;
        this.init();
        this.storedList = {}
        this.addDelListener();
        this.calculObj();
    }
    public init():void{
        this.questions.forEach((item,index)=>{
            this.handleInput(item,index);

        })
    }
    private handleInput(item:Element,index:number):void{
        const inputElement = item.querySelectorAll('input');
        inputElement.forEach((item,index)=>{

            item.addEventListener('click',()=>{
                this.storeObj(String(item.getAttribute('name')),Number(item.getAttribute('value')));
                if(this.paging+1>=this.questions.length){
                    alert('마지막 문제입니다 제출하기를 눌러주세요!')
                    return 
                }
                else{
                    this.questions[this.paging].classList.remove('on');
                    this.paging+=1;
                    this.questions[this.paging].classList.add('on');

                }
                console.log(this.storedList)
            });
        })
    }
    public addDelListener(): void {
        if (this.del) {
            this.del.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.paging === 0) {
                    alert('뒤로 갈 수 없습니다');
                } else {
                    this.questions[this.paging].classList.remove('on');
                    this.paging -= 1;
                    if (this.paging >= 0) {
                        this.questions[this.paging].classList.add('on');
                    }
                }
            });
        }
    }
    private storeObj(name:string,item:number):void{
        this.storedList[name]=item;
    }
    public calculObj():void{
        this.submit?.addEventListener('click',()=>{
            if(this.paging+1>=this.questions.length){
                this.countingAll= Object.values(this.storedList).reduce((acc, value) => acc + value, 0);
                window.location.href = `/public/result.html?counting=${this.countingAll}`;

            }
            else{
                alert('문제에 모두 답변 후 제출해주세요!')
            }
        })
    }
}

const start = new QuestionHandle(questions)

