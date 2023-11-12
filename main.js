
// Lista de URLs das imagens
const imagens = [
    "imagem1.jpg",
    "imagem2.jpg",
    "imagem3.jpg",
];

let indiceAtual = 0;

function trocarFoto(incremento) {
    indiceAtual += incremento;

    // Certifique-se de que o índice não ultrapasse os limites da lista de imagens
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    const imagemAtual = document.getElementById("current-image");
    imagemAtual.src = imagens[indiceAtual];
}

// Exiba a primeira imagem ao carregar a página
trocarFoto(0);
