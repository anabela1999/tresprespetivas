


let timeUntil=0;
let enteredFullscreen = 0;
function preload() {
  
  happy1 = loadImage("happy1.jpg" );
  monster1 = loadImage("monster1.jpg");
  flowers1 = loadImage("flowers1.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
   enteredFullscreen = false;
pixelDensity(1);
}
    

function draw() {
     noLoop();
 }


//clicar em ecrã inteiro
function touchStarted () {
  var fs = fullscreen();
   enteredFullscreen++;
    print ( enteredFullscreen);
  if (!fs) {
      
   
    fullscreen(true);
    
  } 
}



function windowResized()
{
  
  
  // resize once (para nao perder qualidade);
  if (enteredFullscreen <= 1) {
    resizeCanvas(displayWidth, displayHeight);
   flowers1.resize(displayWidth, displayHeight);
    monster1.resize(displayWidth, displayHeight);
    happy1.resize(displayWidth, displayHeight);
  } else {
  
  }
  
  
  }


function mouseDragged () {
 
   noSmooth();
  timeUntil++;
 // print(timeUntil);
  
  if ( timeUntil < 1800) { //para aparecer a imagem logo que comece a raspar
    
  let f = flowers1.get(mouseX,mouseY,70,70);
   //tamanho dos pixeis
  noStroke();
  imageMode(CORNER);
  image(f, mouseX, mouseY);
  }
  
  
  
      if (timeUntil > 1800) {  //após o tempo anterior começar a aparecer a segunda ilustração
    noSmooth();
        
    let m = monster1.get(mouseX,mouseY,70,70); //tamanho dos pixeis
	noStroke();
    imageMode(CORNER);
   image(m, mouseX, mouseY); //para raspar tb nos cantos da imagem
  
      }
 if (timeUntil > 3200) {  //após o tempo anterior começar a aparecer a segunda ilustração
    noSmooth();
      let h = happy1.get(mouseX,mouseY,70,70);
 //tamanho dos pixeis
	noStroke();
    imageMode(CORNER);
    image(h, mouseX, mouseY); //para raspar tb nos cantos da imagem
  }
  
  if(timeUntil >4000) { 
    
    timeUntil = 0;
    
  }
  
  
  
  
  
 
      
}  
 
