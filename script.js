function snow(){
    const snow = document.createElement("div");
    snow.classList.add("snow");
    snow.style.left=Math.random()*100+"vw";
    snow.style.animationDuration=Math.random()*2+3;
    snow.innerText="❄️";
    document.body.appendChild(snow);
    setTimeout(() => {
        snow.remove();
    },3000)
}
function snowMedium(){
    const snowMedium = document.createElement("div");
    snowMedium.classList.add("snowMedium");
    snowMedium.style.left=Math.random()*105+"vw";
    snowMedium.style.animationDuration=Math.random()*2+3;
    snowMedium.innerText="❄️";
    snowMedium.style.fontSize ="13px"
    document.body.appendChild(snowMedium);
    setTimeout(() => {
        snowMedium.remove();
    },3000)
    
}
setInterval(snowMedium, 200);
setInterval(snow, 200);
//set background color
document.body.style.background = "black";
