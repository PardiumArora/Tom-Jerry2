var background1,backgroundImg,tom,jerry,tomImg,jerryImg,tomImg2

var jerryImg2,tomImg3,jerryImg3


function preload(){
  
 backgroundImg = loadImage("garden.png") 
  
  tomImg = loadAnimation("cat1.png")
  
  tomImg2 = loadAnimation("cat2.png","cat3.png")
  
  jerryImg=loadAnimation("mouse1.png")
  
  jerryImg2=loadAnimation("mouse2.png","mouse3.png")
  
  tomImg3 = loadAnimation("cat4.png")

jerryImg3 = loadAnimation("mouse4.png")



  
}



function setup() {
  createCanvas(500, 350);
  
 background1 = createSprite(250,180)
  background1.addImage(backgroundImg)
  background1.scale=0.6
  
  tom = createSprite(400,300)
  tom.addAnimation("tomstay",tomImg)
    tom.scale=0.1
  
  jerry=createSprite(100,300)
  jerry.addAnimation("jerrystay",jerryImg)
  jerry.scale=0.1
  
  
 
  tom.setCollider("rectangle",0,0,1900,800)
  
  jerry.setCollider("rectangle",0,0,450,1200)
  
  
  
  
  
  
  
}

function draw() {
  background(220);
  
  

  
  if(tom.x-160<tom.width/2-jerry.width/2){

tom.addAnimation("tomhappy",tomImg3)
tom.changeAnimation("tomhappy",tomImg3)
jerry.addAnimation("jerryhappy",jerryImg3)
jerry.changeAnimation("jerryhappy",jerryImg3)
tom.velocityX=0


  }
  
  
 
  
  
  drawSprites()
}

function keyPressed(){

 
  if(keyCode===37){
    
    tom.addAnimation("tomrunning",tomImg2)
      tom.changeAnimation("tomrunning",tomImg2)
    jerry.addAnimation("jerryrunning",jerryImg2)
    jerry.changeAnimation("jerryrunning",jerryImg2)
    tom.velocityX=-2
  }











}







