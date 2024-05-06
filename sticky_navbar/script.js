const nav_bar = document.getElementsByClassName("nav-bar")[0];
console.log(nav_bar);
//scrolling effect
window.addEventListener("scroll",(e)=>{
    let y=window.scrollY;
    console.log(y);
    let box=document.querySelector(".content-box-2");
    if(y > box.offsetTop-nav_bar.offsetHeight)
    {
        nav_bar.classList.add("active");
    }
    else{
        nav_bar.classList.remove("active");   
    }
})

