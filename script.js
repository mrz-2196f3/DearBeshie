function heart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=Math.random()*2+3;
    heart.innerText="💖";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    },3000)
}
function textHeart(){
    const textHeart = document.createElement("div");
    textHeart.classList.add("textHeart");
    textHeart.style.left=Math.random()*105+"vw";
    textHeart.style.animationDuration=Math.random()*2+3;
    textHeart.innerText="mwa";
    document.body.appendChild(textHeart);
    setTimeout(() => {
        textHeart.remove();
    },3000)
    
}
setInterval(textHeart, 200);

setInterval(heart, 200);