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