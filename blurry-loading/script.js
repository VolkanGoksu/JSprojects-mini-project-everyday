const loadText = document.querySelector('.loading-text');
const backgorund = document.querySelector('.bg');

let syc = 0 ;

let int = setInterval(blurring,30);
function blurring(){
    syc++;
    if(syc>99){
        clearInterval(int)
    }
    loadText.innerHTML=`${syc}%`;
    loadText.style.opacity = scale(syc,0,100,1,0);
    backgorund.style.filter=`blur(${scale(syc,0,100,30,0)}px)`
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
//stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers