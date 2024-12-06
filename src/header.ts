class headerImport {
    private headerDiv:string = `
    <div class="headerSection">
        <h2 class="title">너 얼마나 T 야?!</h2>
    </div>`
    private headerDom:Element|null = document.querySelector('header');
    constructor(){
        this.init();

    }
    private init():void{
        if (this.headerDom) {
            this.headerDom.innerHTML = this.headerDiv; 
        }
    }

}
const headerInit = new headerImport;