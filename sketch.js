var path,boy, leftBoundary,rightBoundary;
var pathImg ,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
path = createSprite(200,200,10,10);
path.addAnimation("direção",pathImg);
pathImg.scale=1.2;
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.

//crie um sprite de menino
boy = createSprite(200,280,10,10);
boy.addAnimation("correr",boyImg);
boy.scale=0.08;
//adicione uma animação de corrida para ele

  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);

//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(400,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
