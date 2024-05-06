let container = document.getElementsByClassName("main")[0];
for(let i=0;i<48;i++)
{
    let colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    let color=randomColor();
    colorBox.style.backgroundColor=color;
    colorBox.innerText=color;
    container.append(colorBox);
}
function randomColor(){
    let chars ="0123456789ABCDEF";
    let color="";
    for(let i=0;i<6;i++)
    {
        color+=chars[Math.floor(Math.random()*16)];
    }
    color="#"+color;
    return color;
}