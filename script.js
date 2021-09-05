var color = ['tomato','orange','DodgerBlue','MediumSeaGreen','SlateBlue','Violet','aqua','yellow']
var prev = 0, random;
var btn = document.getElementById('btn');
var box = document.getElementById('box');
btn.onclick = function(){
    rand();
    box.style.backgroundColor=color[random];
};

function rand(){
    var randomChk = Math.floor((Math.random()*color.length));
    chk(randomChk);
}
function chk(randomChk){
    if(randomChk==prev){
        rand();
    }
    else{
        prev = randomChk;
        random = randomChk;
    }
}