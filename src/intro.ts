class animation{
    private intro:Element|null = document.querySelector('.intro');
    constructor(){
        this.animationStart();
    }
    private animationStart():void{
        setTimeout(()=>{
            this.intro?.classList.add('off');
        },2000);
    }

}
const animationStart = new animation();