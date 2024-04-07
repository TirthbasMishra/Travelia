const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load",()=>{
   //removing the loading animation once page is fully loaded
   preloader.classList.add("remove")
})