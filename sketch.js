let persona
let grama
const tamanho = 64
let x = 64
let y = 64

let andarx = 0
let andary = 0

let velocidade = 64

let botao

function setup() {
  createCanvas(576, 576);
  persona = loadImage('person.png');
  grama = loadImage('grass.png');
}


function draw() {
  background(220)
  
  if (andarx < 0){
    andarx=0
  }
  
  if (andarx >tamanho*8){
    andarx = tamanho*8
  }
  
  if (andary < 0){
    andary=0
  }
  
  if (andary > tamanho*8){
    andary= tamanho*8
  }
  
  
  
  
  
  
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      image(grama, x*i, y*j, tamanho, tamanho)
    }
  }
  
  image(persona, andarx, andary, tamanho, tamanho)
  
  if (andarx === tamanho*8 && andary === tamanho*8){
    rect(220,300, 256, 256)
  
  text ('fim de jogo',220,350)
    
    
    botao = createButton('RESTART')
    botao.position(50,200)
    
    botao.mousePressed(RESTART)
    
    noLoop()
    
    }
  
  textSize(30)
  
}





function keyPressed(){
  if (keyIsDown(RIGHT_ARROW)){
      andarx += velocidade
      }
  if (keyIsDown(DOWN_ARROW)){
      andary += velocidade
      }
  if (keyIsDown(UP_ARROW)){
      andary-= velocidade
      }
  if (keyIsDown(LEFT_ARROW)){
      andarx -= velocidade
      }
    
    
}

function RESTART (){
  andarx = 0
  andary = 0
  botao.remove()
  loop()
}










