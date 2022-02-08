var papaiNoel, papaiParado;
var bg
var cat
var presente
var parede
var parede2
var pontosPapeiNoel = 0
var pontosGato = 0
var bomba

function preload() {
 papaiNoel = loadAnimation("images/Run (2).png","images/Run (3).png","images/Run (5).png","images/Run (9).png","images/Run (10).png","images/Run (11).png")
 bg = loadImage("images/BG.png")
 papaiParado = loadImage("images/Idle (1).png")
 cat = loadImage("images/Idle (3).png")
 presentes = loadImage("images/presentinho.png")
 bomba = loadImage("images/bomb.png")
}

function setup() {
  createCanvas(800,600);
  
  papaiNoel2 = createSprite(200,550,40,40) 
  papaiNoel2.addImage("parado",papaiParado)
  papaiNoel2.addAnimation("andando",papaiNoel)
  papaiNoel2.scale = 0.2
  
  papaiNoel2.setCollider ("circle",0,0,40)

  cat2 = createSprite(600,550,40,40)
  cat2.addImage("catinho",cat)
  cat2.scale = 0.23
  
  cat2.setCollider ("circle",0,0,40)

  parede1 = createSprite(0,300,40,800)
  parede1.visible = false
  

  parede3 = createSprite(800,300,40,800)
  parede3.visible = false
  
 
}

function draw() {
  background(bg); 

textSize(15)
fill("black")
text("gatos: " + pontosGato,600,35)


textSize(15)
fill("black")
text("Papai Natal: " + pontosPapeiNoel,150,35)


  
 if(keyDown("LEFT_ARROW")){
   papaiNoel2.x = papaiNoel2.x  -7
  papaiNoel2.changeAnimation("andando")
 }
 


 if(keyDown("RIGHT_ARROW")){
  papaiNoel2.x = papaiNoel2.x +7
 papaiNoel2.changeAnimation("andando")
}


if(keyDown("D")){
  cat2.x = cat2.x +7

}

if(keyDown("A")){
  cat2.x = cat2.x  -7

}

papaiNoel2.collide(parede1)
papaiNoel2.collide(parede3)
cat2.collide(parede1)
cat2.collide(parede3)


if (frameCount % 40 == 0){
  criarPresente ()
}

if (frameCount % 95 == 0){
  criarBomba ()
}










  drawSprites()
}

function criarPresente () {
  presente2 = createSprite(random(10,790),60,60)
  presente2.addImage("present",presentes)
  presente2.scale = 0.16
  presente2.velocityY = 5
}

function criarBomba () {
  bomba2 = createSprite(random(10,790),60,60)
  bomba2.addImage("bombinha",bomba)
  bomba2.scale = 0.1
  bomba2.velocityY = 8
}