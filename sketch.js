var song;
var blocks=[
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
var level=0;
var keys=[];
function keyPressed(){
  keys[keyCode]=true;
}
function keyReleased(){
  keys[keyCode]=false;
}
var timer=0;
var Background;
var player;
var level=0;
var levelWidth=0;
var levelHeight=0;
var cam={
  x:0,
  y:0
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  player=new Player(200,200);
  Background=new backgrounds(0,0,1);
  createCanvas(windowWidth, windowHeight);
  song=loadSound('Diivi- Illusive NightMares(Snipped).mp3',ok);
  Load(blocks,worldMap);
}
function ok(){
  song.play();
}
var BG=[131,131,131];
function draw() {
  frameRate(60);
  strokeCap(SQUARE);
  for(var i=0;i<worldMap[level].length;i++){
    for(var j=0;j<worldMap[level][i].length;j++){
      levelHeight=worldMap[level].length;
      levelWidth=worldMap[level][i].length;
    }
  }
  if(levelWidth*50>width){
    cam.x=lerp(cam.x, width/2-player.x, 0.05);
  }else{
    cam.x=-levelWidth*25;
  }
  if(levelHeight*50>height){
    cam.y=lerp(cam.y, height/2-player.y, 0.05);
  }else{
    cam.y=-levelHeight*25;
  }
  background(0);
  Background.update();
  Background.show();
  push();
  translate(width/2,height/2);
  translate(cam.x,cam.y);
  if(levelHeight*50>height){
    translate(0,-height/2);
  }
  if(levelWidth*50>width){
    translate(-width/2,0);
  }
  //background(BG[0],BG[1],BG[2]);
  for(var i=0;i<blocks[level].length;i++){
    blocks[level][i].update();
    blocks[level][i].updateTextures(blocks[level]);
    blocks[level][i].show();
  }
  //console.log(blocks[141].glitchInterval)
  if(song.isPlaying()){
    timer++;
  }
  console.log(timer);
  player.update(blocks[level]);
  player.show();
  pop();
  switch(timer){
    case 0:
      Background.type=1;
        for(var i=0;i<blocks[level].length;i++){
          blocks[level][i].type2=1;
        }
    break;
    case 1285:
      Background.y=0;
      Background.type=2;
        for(var i=0;i<blocks[level].length;i++){
          blocks[level][i].type2=2;
        }
    break;
    case 2507:
      Background.y=0;
      Background.type=8;
        for(var i=0;i<blocks[level].length;i++){
          blocks[level][i].type2=3;
          blocks[level][i].type3=2;
        }
    break;
    case 2637:
      Background.y=0;
      Background.type=3;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=1;
      }
    break;
    case 3933:
      Background.y=0;
      Background.type=4;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=5;
      }
    break;
    case 4555:
      Background.y=0;
      Background.type=5;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=4;
      }
    break;
    case 5222:
      Background.y=0;
      Background.type=6;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=1;
      }
    break;
    case 6000:
      Background.y=0;
      Background.type=7;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=4;
      }
    break;
    case 6360:
      Background.y=0;
      Background.type=9;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=3;
      }
    break;
  }
  if(player.hitPortal){
    player.yvel=0;
    player.inverted=false;
    level++;
    Load(blocks, worldMap);
    Erase(blocks[level-1]);
    if(timer<1285){
      Background.type=1;
        for(var i=0;i<blocks[level].length;i++){
          blocks[level][i].type2=1;
        }
    }
    if(timer>=1285&&timer<2507){
      Background.y=0;
      Background.type=2;
        for(var i=0;i<blocks[level].length;i++){
          blocks[level][i].type2=2;
        }
    }
    if(timer >=2507&&timer<2637){    
      Background.y=0;
      Background.type=8;
        for(var i=0;i<blocks[level].length;i++){
          blocks[level][i].type2=3;
          blocks[level][i].type3=2;
        }
    }
    if(timer>=2637&&timer<3933){
      Background.y=0;
      Background.type=3;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=1;
      }
    }
    if(timer>=3933&&timer<4555){
      Background.y=0;
      Background.type=4;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=5;
      }
    }
    if(timer>=4555&&timer<5222){
      Background.y=0;
      Background.type=5;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=4;
      }
    }
    if(timer>=5222&&timer<6000){
      Background.y=0;
      Background.type=6;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=1;
      }
    }
    if(timer>=6000&&timer<6360){
      Background.y=0;
      Background.type=7;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=4;
      }
    }
    if(timer>=6360){      
      Background.y=0;
      Background.type=9;
      for(var i=0;i<blocks[level].length;i++){
        blocks[level][i].type2=3;
        blocks[level][i].type3=3;
      }
    }
  }
}
