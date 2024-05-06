let btn= document.getElementById("button");
console.log(btn);
btn.addEventListener("mouseover",(e)=>{
    let x=(e.pageX-btn.offsetLeft);
    let y=(e.pageY-btn.offsetTop);
    btn.style.setProperty("--x",x+'px');
    btn.style.setProperty("--y",y+'px');
})