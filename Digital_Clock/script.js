setInterval(()=>{
    
    let hrs=document.querySelector(".hours span");
    let min=document.querySelector(".minutes span");
    let sec=document.querySelector(".seconds span");
    let ampm=document.querySelector(".ampm");
    console.log(hrs,min,sec,ampm);
    let date=new Date( new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000)).toISOString().split("T")[1].split(":");
    hrs.textContent=date[0]%12 ;
    min.textContent=date[1];
    sec.textContent=date[2].split('.')[0];
    ampm.textContent=parseInt(date[0])>=12?"PM":"AM";
    console.log(date);

},1000);