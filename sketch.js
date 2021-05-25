var jerry
var tom
var garden,gardenImg
var cat1,catAnmt,cat4
var mouse1,mouseAnmt,mouse4

function preload() {
    //load the images here
    cat1 = loadImage("images/cat1.png")
    catAnmt = loadAnimation("images/cat2.png", "images/cat3.png")
    cat4 = loadImage("images/cat4.png")
    mouse1 = loadImage("images/mouse1.png")
    mouseAnmt = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouse4 = loadImage("images/mouse4.png")
    gardenImg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400)
    garden.addImage("garden", gardenImg)
    jerry = createSprite(200,600,25,25)
    jerry.addImage("jerry", mouse1)
    jerry.scale = 0.15
    tom = createSprite(800,600,25,25)
    tom.addImage("cat", cat1)
    tom.scale = 0.15
    
}
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x < (tom.width - jerry.width)/2) {
        tom.velocityX = 0
        jerry.addImage("mouse2", mouse4)
        jerry.changeImage("mouse2")
        tom.addImage("cat5", cat4)
        tom.changeImage("cat5")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown(LEFT_ARROW)) {
      tom.velocityX = -3
      tom.addAnimation("tom1", catAnmt)
      tom.changeAnimation("tom1")
      jerry.addAnimation("mouse1", mouseAnmt)
      jerry.changeAnimation("mouse1")
  }


}
