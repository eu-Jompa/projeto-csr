const menu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-x");
const nav = document.querySelector("nav");

menu.addEventListener("click", onMenu);
closeMenu.addEventListener("click", offMenu);

function onMenu(){
    
    nav.classList.add("open-nav");
    menu.classList.add("close-menu");
    closeMenu.classList.remove("close-menu");
    nav.classList.add("open-nav");


}
function offMenu(){
        
        closeMenu.classList.add("close-menu");
        nav.classList.remove("open-nav");
        menu.classList.remove("close-menu");
    
}