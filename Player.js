function Player(x,y,mode){
    this.x=x;
    this.y=y;
    this.yvel=0;
    this.mode=mode;
    this.Sz=20;
    this.accel=5;
    this.speed=0;
    this.falling=true;
    this.jumpHeight=9.7;
    this.hitPortal=false;
    this.respawn={
      x:this.x,
      y:this.y
    };
    this.inverted=false;
    this.hitPortal
    this.gravity=0.8;
    this.update=function(blocks){
      if(keys[LEFT_ARROW]){
        if(this.inverted){
          this.speed=this.accel;
        }
        if(!this.inverted){
          this.speed=-this.accel;
        }
      }
      if(keys[RIGHT_ARROW]){
        if(this.inverted){
          this.speed=-this.accel;
        }
        if(!this.inverted){
          this.speed=this.accel;
        }
      }
      if(!keys[LEFT_ARROW]&&!keys[RIGHT_ARROW]){
        this.speed=0;
      }
      if(keys[UP_ARROW]&&!this.falling){
        this.yvel=-this.jumpHeight;
      }
      if(keys[82]){
        this.x=this.respawn.x;
        this.y=this.respawn.y;
        this.yvel=0;
        this.inverted=false;
      }
      this.x+=this.speed;
      this.hitPortal=false;
      this.collideWith(this.speed,0,blocks);
      this.y+=this.yvel;
      this.yvel+=this.gravity;
      this.falling=true;
      this.collideWith(0,this.yvel,blocks);
    };
    this.collideWith=function(xv,yv,blocks){
      for(var i=0;i<blocks.length;i++){
        var b=blocks[i];
        if(this.inverted){
          b.active=true;
        }
        if(!this.inverted){
          b.active=false;
        }
        if(this.y+this.Sz > b.y &&
            this.y        < b.y+b.Sz &&
            this.x+this.Sz > b.x &&
            this.x        < b.x+b.Sz){
              b.on=true;
            //console.log("ouch");
            switch(b.type1){
              case 1:
              if(yv>0) {
                  this.yvel = 0;
                  this.falling = false;
                  this.y = b.y-this.Sz;
              }
              // TOP
              if(yv<0) {
                  this.yvel = 0;
                  this.falling = true;
                  this.y = b.y+b.Sz;
              }
              // RIGHT
              if(xv>0) {
                  this.speed = 0;
                  this.x = b.x-this.Sz;
              }
              // LEFT
              if(xv<0) {
                  this.speed = 0;
                  this.x = b.x+b.Sz;
              }
              break;
              case 2:
                this.x=this.respawn.x;
                this.y=this.respawn.y;
                this.yvel=0;
                this.inverted=false;
              break;
              case 3:
                this.hitPortal=true;
              break;
              case 4:
                this.inverted=true;
              break;
              case 5:
                this.inverted=false;
              break;
              case 6:
                if(b.active){
                  if(yv>0) {
                    this.yvel = -14;
                    this.y = b.y-this.Sz;
                }
                // TOP
                if(yv<0) {
                    this.yvel = 14;
                    this.falling = true;
                    this.y = b.y+b.Sz;
                }
                // RIGHT
                if(xv>0) {
                    this.speed = 0;
                    this.x = b.x-this.Sz;
                }
                // LEFT
                if(xv<0) {
                    this.speed = 0;
                    this.x = b.x+b.Sz;
                }
                }
                if(!b.active){
                  if(yv>0) {
                    this.yvel = 0;
                    this.falling = false;
                    this.y = b.y-this.Sz;
                }
                // TOP
                if(yv<0) {
                    this.yvel = 0;
                    this.falling = true;
                    this.y = b.y+b.Sz;
                }
                // RIGHT
                if(xv>0) {
                    this.speed = 0;
                    this.x = b.x-this.Sz;
                }
                // LEFT
                if(xv<0) {
                    this.speed = 0;
                    this.x = b.x+b.Sz;
                }  
                }
              break;
              case 7:
                if(!b.active){
                  if(yv>0) {
                    this.yvel = -14;
                    this.y = b.y-this.Sz;
                }
                // TOP
                if(yv<0) {
                    this.yvel = 14;
                    this.falling = true;
                    this.y = b.y+b.Sz;
                }
                // RIGHT
                if(xv>0) {
                    this.speed = 0;
                    this.x = b.x-this.Sz;
                }
                // LEFT
                if(xv<0) {
                    this.speed = 0;
                    this.x = b.x+b.Sz;
                }
                }
                if(b.active){
                  if(yv>0) {
                    this.yvel = 0;
                    this.falling = false;
                    this.y = b.y-this.Sz;
                }
                // TOP
                if(yv<0) {
                    this.yvel = 0;
                    this.falling = true;
                    this.y = b.y+b.Sz;
                }
                // RIGHT
                if(xv>0) {
                    this.speed = 0;
                    this.x = b.x-this.Sz;
                }
                // LEFT
                if(xv<0) {
                    this.speed = 0;
                    this.x = b.x+b.Sz;
                }  
                }
              break;
              case 8:
                this.falling=false;
              break;
            }
        }
      }
    }
    this.show=function(){
      if(timer<1285){
        fill(255);
        rect(this.x,this.y,this.Sz,this.Sz);
      }
      if(timer>=1285&&timer<2507){
        fill(0);
        rect(this.x,this.y,this.Sz,this.Sz);
      }
      if(timer >=2507&&timer<2637){  
        fill(255);
        rect(this.x,this.y,this.Sz,this.Sz);  
      }
      if(timer>=2637&&timer<3933){
        fill(0);
        rect(this.x,this.y,this.Sz,this.Sz);
      }
      if(timer>=3933&&timer<4555){
        fill(1,51,33)
        rect(this.x,this.y,this.Sz,this.Sz);
      }
      if(timer>=4555&&timer<5222){
        fill(63,19,41);
        rect(this.x,this.y,this.Sz,this.Sz);
      }
      if(timer>=5222&&timer<6000){
        fill(0);
        rect(this.x,this.y,this.Sz,this.Sz);
      }
      if(timer>=6000&&timer<6360){
        fill(63,19,41);
        rect(this.x,this.y,this.Sz,this.Sz);
      }
      if(timer>=6360){
        fill(255);
        rect(this.x,this.y,this.Sz,this.Sz);        
      }
    };
}