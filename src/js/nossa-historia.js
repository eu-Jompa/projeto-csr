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
});

