let  s=0;
let submit=document.querySelector(".submit");
let x=1;
let y=2;
let qs=document.querySelector(".question");
qs.textContent=`What is the multiplication of ${x} and ${y}`;
submit.addEventListener("click",(e)=>
{
    e.preventDefault();
    let ans = document.querySelector(".input").value;
    s=(ans == x*y)?s+1:s-1;
    document.querySelector(".score").textContent=`score : ${s}`;
    x=Math.floor(Math.random()*10);
    y=Math.floor(Math.random()*50);
    qs.textContent=`What is the multiplication of ${x} and ${y}`;
    document.querySelector(".input").value="";  
})