export function particleBanner(){
    let arr = [];
    function randomFn(min, max){
        return parseInt(Math.random() * (max - min) + min);
    }
    function Ball (){
        this.r = randomFn(10,30)
    }
}