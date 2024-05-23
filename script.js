const fotos = document.querySelectorAll('.fotos div');
const anterior = document.querySelector('#anterior');
const proximo = document.querySelector('#proximo');

let indiceAtual = 0;

function mudouTamanho(){
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    }
    else (itens.style.display = 'none')
}
function clickMenu(){
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    }
    else (itens.style.display = 'block')
}
function mostrarFoto(indice) {
    fotos.forEach(fotos => fotos.style.opacity = 0);
    fotos[indice].style.opacity = 1;
}

mostrarFoto(indiceAtual);

function anterior(){
    if (indiceAtual === 0) {
        indiceAtual = fotos.length - 1;
    } else {
        indiceAtual--;
    }
    mostrarFoto(indiceAtual);
}

/* anterior.addEventListener('click', () => {
    if (indiceAtual === 0) {
        indiceAtual = fotos.length - 1;
    } else {
        indiceAtual--;
    }
    mostrarFoto(indiceAtual);
}); */

proximo.addEventListener('click', () => {
    if (indiceAtual === fotos.length - 1) {
        indiceAtual = 0;
    } else {
        indiceAtual++;
    }
    mostrarFoto(indiceAtual);
});

