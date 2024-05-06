window.addEventListener("mousemove",(e)=>{
    const span = document.createElement("span");
    const body = document.querySelector("body");
    span.style.left=e.offsetX + "px";
    span.style.top=e.offsetY + "px";
    let size=Math.floor(Math.random()*100)+"px";
    span.style.width=size;
    span.style.height=size;
    body.appendChild(span);
    console.log(span);
    setTimeout(()=>{
        span.remove();
    },5000);
})