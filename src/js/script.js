const menu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-x");
const ulNav= document.querySelector("ul")
const nav = document.querySelector("nav");
const redesocial= document.querySelector(".rede-social");
menu.addEventListener("click", onMenu);
closeMenu.addEventListener("click", offMenu);

function onMenu(){
    
    nav.classList.add("open-nav");
    menu.classList.add("close-menu");
    closeMenu.classList.remove("close-menu");
    nav.classList.add("open-nav");
    ulNav.classList.add("open-ul");
    redesocial.classList.add("open-rede-social");
}
function offMenu(){
        
        closeMenu.classList.add("close-menu");
        nav.classList.remove("open-nav");
        menu.classList.remove("close-menu");
    
}