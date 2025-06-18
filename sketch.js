

  let tratorX = 100;
let tratorDir = 1;

let carroX = 420;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(135, 206, 235); // Céu azul

  desenharCampo();
  desenharCidade();

  // Trator trabalhando no campo
  desenharTrator(tratorX, height - 70);
  tratorX += tratorDir * 2;
  if (tratorX > 350 || tratorX < 50) {
    tratorDir *= -1;
  }

  // Carro andando na cidade
  desenharCarro(carroX, height - 60);
  carroX += 3;
  if (carroX > width + 50) {
    carroX = width / 2 + 20;
  }
}

function desenharCampo() {
  // Campo (lado esquerdo)
  fill(100, 200, 100);
  rect(0, height - 100, width / 2, 100);

  fill(0);
  textSize(16);
  text("Campo", 20, 30);
}

function desenharCidade() {
  // Rua da cidade
  fill(180);
  rect(width / 2, height - 100, width / 2, 100);

  // Prédios
  fill(80);
  for (let i = width / 2 + 20; i < width; i += 60) {
    let h = 80 + (i % 3) * 20;
    rect(i, height - 100 - h, 40, h);
  }

  // Árvores
  for (let i = width / 2 + 10; i < width; i += 80) {
    desenharArvore(i + 20, height - 100);
  }

  fill(0);
  textSize(16);
  text("Cidade", width - 80, 30);
}

function desenharArvore(x, y) {
  // Tronco
  fill(101, 67, 33);
  rect(x - 5, y - 20, 10, 20);

  // Copa
  fill(34, 139, 34);
  ellipse(x, y - 30, 30, 30);
}

function desenharTrator(x, y) {
  // Corpo
  fill(255, 100, 0);
  rect(x, y - 30, 60, 30); // base
  rect(x + 40, y - 50, 25, 20); // cabine

  // Rodas
  fill(0);
  ellipse(x + 10, y, 20, 20);
  ellipse(x + 50, y, 25, 25);

  // Ferramenta
  fill(100, 50, 0);
  rect(x - 10, y - 10, 10, 5);
}

function desenharCarro(x, y) {
  // Corpo
  fill(0, 100, 255);
  rect(x, y - 15, 50, 15);
  rect(x + 10, y - 30, 30, 15);

  // Rodas
  fill(0);
  ellipse(x + 10, y, 12, 12);
  ellipse(x + 40, y, 12, 12);
}