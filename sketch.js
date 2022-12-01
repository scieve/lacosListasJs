
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png")
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor, 100, 366, 30, 30);
  image(imagemCarro, 420, 40, 50, 40)
}