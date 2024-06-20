document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe 'toggle-btn'
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Alterna a classe 'active' no botão clicado
            button.classList.toggle('active');
        });
    });
});