let btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "black";
    }else{
        document.body.style.backgroundColor = "white";
    }
})