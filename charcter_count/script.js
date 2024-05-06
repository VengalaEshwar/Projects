let text_area = document.getElementById("text-area");
text_area.addEventListener("keyup",(e)=>{
    let remain = document.getElementById("remain");
    let total =document.getElementById("total");
    total.textContent=text_area.value.length; //
    remain.innerText=text_area.getAttribute("maxlength") - text_area.value.length;
})