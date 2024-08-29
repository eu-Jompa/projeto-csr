const menu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-x");
const nav = document.querySelector("nav");
async function loadHTML(elementId, filepath) {
    try {
        const response = await fetch(filepath);
        if (!response.ok) {
            throw new Error(`Erro ao carregar ${filepath}: ${response.statusText}`);
        }
        const data = await response.text();
        document.getElementById(elementId).innerHTML = data;
    } catch (error) {
        console.error('Erro ao carregar conteúdo:', error);
        document.getElementById(elementId).innerHTML = `<p>Erro ao carregar conteúdo.</p>`;
    }
}

// Evento DOMContentLoaded para garantir que o DOM esteja pronto antes de carregar o HTML
document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header', '/src/html/menu.html');
    loadHTML('footerId', '/src/html/footer.html');
    menu.addEventListener("click", onMenu);
    closeMenu.addEventListener("click", offMenu);
});

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