let mass = [];
let pos = 0;
function input()
{
    let item = Number(document.getElementById("item").value) 
    if(item != NaN)
    {
        mass[pos] = item;  
    }    
    else
    {
        mass[pos] = 0;
    }
    pos += 1;
    showMass();
}
function Sum()
{
    let sum = 0;
    mass.forEach(function(item, i, arr) {
        sum += item;
      })
    return sum;  
}
function showAllHlebMass()
{
    document.getElementById("showAllHlebMass").innerHTML = Sum();
}
function showMass()
{
    document.getElementById("showMass").innerHTML = mass;
}
function noize()
{
    let audio = new Audio();
    audio.preload = 'auto';
    audio.src = "./JS/hhhhh.mp3";
    audio.play();
}
function movePlayer(e){
     
    var blueRect = document.getElementById("kamenshik");
    // получаем стиль для blueRect
    var cs = window.getComputedStyle("palyer img");
     
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);
     
    switch(e.keyCode){
         
        case 37:  // если нажата клавиша влево
            if(left>0)
                blueRect.style.marginLeft = left - 10 + "px";
            break;
        case 38:   // если нажата клавиша вверх
            if(top>0)
                blueRect.style.marginTop = top - 10 + "px";
            break;
        case 39:   // если нажата клавиша вправо
            if(left < document.documentElement.clientWidth - 100)
                blueRect.style.marginLeft = left + 10 + "px";
            break;
        case 40:   // если нажата клавиша вниз
            if(top < document.documentElement.clientHeight - 100)
                blueRect.style.marginTop = top + 10 + "px";
            break;
    }
}
 
addEventListener("keydown", movePlayer);