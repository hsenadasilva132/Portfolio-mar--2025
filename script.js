//Seleciona todos os links de navegação 
const links = document.querySelectorAll('.a-navigation');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Impede o comportamento padrão do clique

        //obtém o destino do link através do atributo href
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        //Rolamento suave
        targetSection.scrollIntoView({
            behavior: 'smooth' //define o comportamento suave 
        });
    });
});

//Função para detectar se o elemento esta visivel na tela 
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para aplicar as animações
function handleScroll() {
    const elements = document.querySelectorAll('.element-hidden'); // Seleciona os elementos
    elements.forEach((element) => {
        if(isElementInViewport(element)) {
            element.classList.add('element-visible'); // Adiciona a classe visivel 
            element.classList.remove('element-hidden'); // remove a clase escondida
        }
    })
}

//Adiciona o evento de rolagem á janela 
window.addEventListener('scroll', handleScroll);

//Para garantir que elementos já visiveis ao carregar sejam exibidos 
window.addEventListener('load', handleScroll);