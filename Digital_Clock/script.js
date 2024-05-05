setInterval(()=>{
    
    let hrs=document.querySelector(".hours span");
    let min=document.querySelector(".minutes span");
    let sec=document.querySelector(".seconds span");
    let ampm=document.querySelector(".ampm");
    // console.log(hrs,min,sec,ampm);
    // let date=new Date( new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000)).toISOString().split("T")[1].split(":");
    // hrs.textContent=date[0]%12 ;
    // min.textContent=date[1];
    // sec.textContent=date[2].split('.')[0];
    let date = new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    ampm.textContent=h>=12?"PM":"AM";
    h=h%12;
    hrs.textContent=h ;
    min.textContent=m;
    sec.textContent=s;
    console.log(date);

},1000);