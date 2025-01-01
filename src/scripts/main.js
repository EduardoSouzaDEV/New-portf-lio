document.addEventListener("DOMContentLoaded", function () {

    // Seletor para os botões
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    // Adiciona o evento de clique para cada botão
    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            const abaAlvo = event.target.dataset.tabButton; // O alvo da aba

            // Esconde todos os botões e abas
            removeButtons(); 
            removeAbas();

            // Adiciona classe ao botão clicado
            event.target.classList.add('shows__tab__button--is-active');

            // Mostra a aba correspondente
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`); // Seleciona a aba correspondente
            if (aba) {
                aba.classList.add('shows__tab__id--is-active');
            }
        });
    });

    // Função para remover a classe ativa dos botões
    function removeButtons() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        buttons.forEach(button => {
            button.classList.remove('shows__tab__button--is-active');
        });
    }

    // Função para remover a classe ativa das abas
    function removeAbas() {
        const containerTabs = document.querySelectorAll('[data-tab-id]');
        containerTabs.forEach(tab => {
            tab.classList.remove('shows__tab__id--is-active');
        });
    }

    

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (event) {
            const abaAlvo = event.target.dataset.tabButton;
            // Esconde todos os botões e abas
            escondeButtons();
            // Adiciona classe ao botão clicado
            event.target.classList.add('navbar__tab__button--is-active');
            // Mostra a aba correspondente
            escondeAbas();
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            if (aba) {
                aba.classList.add('navbar__tab__id--is-active');
            }
        });
    }

    // Remove a classe ativa de todos os botões
    function escondeButtons() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('navbar__tab__button--is-active');
        }
    }

    // Remove a classe ativa de todas as abas
    function escondeAbas() {
        const containerTabs = document.querySelectorAll('[data-tab-id]');
        for (let i = 0; i < containerTabs.length; i++) {
            containerTabs[i].classList.remove('navbar__tab__id--is-active');
        }
    }
});
