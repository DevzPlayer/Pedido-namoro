// Define o estado inicial como página 1
let currentPage = 1;

// Adiciona o elemento de áudio dinamicamente
const audio = new Audio('./src/music/music.mp3'); // Caminho relativo ao servidor local
audio.loop = true; // Faz a música repetir automaticamente

// Função para mostrar a página com base no número da página
function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');

    // Alterna a visibilidade das páginas
    pages.forEach((page, index) => {
        if (index + 1 === pageNumber) {
            page.classList.add('active');
            page.classList.remove('hidden');
        } else {
            page.classList.remove('active');
            page.classList.add('hidden');
        }
    });

    // Inicia a música apenas ao sair da página 1
    if (currentPage === 1 && pageNumber !== 1) {
        audio.play(); // Inicia a música ao sair da página 1
    }

    // Atualiza a página atual
    currentPage = pageNumber;
}

// Chama a função ao carregar o site para iniciar na página 1
document.addEventListener('DOMContentLoaded', () => {
    showPage(1); // Inicia na página 1
    if (currentPage === 1) {
        audio.play(); // Inicia a música automaticamente ao carregar a página 1
    }
});