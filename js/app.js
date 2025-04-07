let btn=document.querySelector(".icon");
let ul=document.querySelector("ul");
let x=document.querySelector("#x");
let bar=document.querySelector("#bar");

btn.addEventListener("click", function() {
   if(ul.classList.contains("vis")){
    ul.classList.remove("vis");
    bar.style.display="block";
    x.style.display="none";
   }
   else{
    ul.classList.add("vis");
    x.style.display="block";
    bar.style.display="none";

   }
})