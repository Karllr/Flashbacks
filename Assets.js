function Block(x,y,type1,type2,type3,type4){
    this.x=x;
    this.y=y;
    this.type1=type1;
    this.type2=type2;
    this.type3=type3;
    this.type4=type4;
    this.Sz=50;
    this.glitchX1=this.x+10;
    this.glitchY1=this.y-10;
    this.glitchX2=this.x-10;
    this.glitchY2=this.y+10;
    this.glitchInterval=round(random(0,15));
    this.on=false;
    this.FirstX=this.x;
    this.FirstY=this.y;
    this.FirstAlpha=255;
    this.active=false;
    this.updateTextures=function(blocks){
        for(var i=0;i<blocks.length;i++){
            var b=blocks[i];
            if(dist(this.x,this.y,b.x,b.y)===50){
                if(this.on){
                    b.on=true;
                }
                if(this.type1===b.type1){
                        if(this.x-b.x===-50){
                            this.BlocktoRight=true;
                        }
                        if(this.x-b.x===50){
                            this.BlocktoLeft=true;
                        }
                        if(this.y-b.y===50){
                            this.BlockAbove=true;
                        }
                        if(this.y-b.y===-50){
                            this.BlockBelow=true;
                        }
                    }
            }
            switch(this.type2){
                case 1:
                    if(!this.BlockAbove&&this.BlockBelow&&!this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=3;
                        this.type4=1;
                    }
                    if(!this.BlockAbove&&!this.BlockBelow&&this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=3;
                        this.type4=2;
                    }
                    if(this.BlockAbove&&!this.BlockBelow&&!this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=3;
                        this.type4=3;   
                    }
                    if(!this.BlockAbove&&!this.BlockBelow&&!this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=3;
                        this.type4=4;
                    }
                    if(!this.BlockAbove&&this.BlockBelow&&this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=2;
                        this.type4=1;
                    }
                    if(!this.BlockAbove&&this.BlockBelow&&!this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=2;
                        this.type4=4;
                    }
                    if(this.BlockAbove&&!this.BlockBelow&&this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=2;
                        this.type4=2;
                    }
                    if(this.BlockAbove&&!this.BlockBelow&&!this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=2;
                        this.type4=3;
                    }
                    if(!this.BlockAbove&&this.BlockBelow&&this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=4;
                        this.type4=1;
                    }
                    if(this.BlockAbove&&!this.BlockBelow&&this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=4;
                        this.type4=3;
                    }
                    if(this.BlockAbove&&this.BlockBelow&&this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=4;
                        this.type4=2;
                    }
                    if(this.BlockAbove&&this.BlockBelow&&!this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=4;
                        this.type4=4;
                    }
                    if(this.BlockAbove&&this.BlockBelow&&this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=5;
                        this.type4=4;
                    }
                    if(!this.BlockAbove&&!this.BlockBelow&&!this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=1;
                        this.type4=1;
                    }
                    if(!this.BlockAbove&&!this.BlockBelow&&this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=5;
                        this.type4=1;
                    }
                    if(this.BlockAbove&&this.BlockBelow&&!this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=5;
                        this.type4=2;
                    }
                break;
                case 2:
                    if(!this.BlockAbove&&(this.BlocktoLeft||this.BlocktoRight)){
                        this.type3=2;
                        this.type4=1;
                    }
                    if(this.BlockAbove||(this.BlockAbove&&this.BlockBelow)){
                        this.type3=3;
                        this.type4=1;
                    }
                    if(this.BlockBelow&&!this.BlockAbove){
                        this.type3=2;
                        this.type4=1;
                    }
                break;
                case 3:
                break;
                case 4:
                    if(this.BlocktoLeft){
                        this.type3=2;
                        this.type4=1;
                    }
                    if(this.BlocktoRight){
                        this.type3=2;
                        this.type4=2;
                    }
                    if(this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=3;
                        this.type4=1;
                    }
                    if(!this.BlockAbove&&this.BlockBelow&&!this.BlocktoRight&&!this.BlocktoLeft){
                        this.type3=1;
                        this.type4=2;
                    }
                break;
                case 5:
                    if(this.BlockAbove||(this.BlockAbove&&this.BlockBelow)){
                        this.type3=2;
                    }
                break;
            }
        }
    };
    this.update=function(){
        switch(this.type1){
            case 1:
                switch(this.type2){
                    case 1:
                        if(this.on){
                            this.FirstX=lerp(this.FirstX,this.x-25,0.05);
                            this.FirstY=lerp(this.FirstY,this.y+25,0.05);
                            this.FirstAlpha-=5;
                            if(this.FirstAlpha<50){
                                this.FirstAlpha=50;
                            }
                        }
                    break;
                    case 3:
                        switch(this.type3){
                            case 2:
                                if(frameCount%this.glitchInterval===0){
                                    this.glitchX1=random(this.x-10,this.x+10);
                                    this.glitchY1=random(this.y-10,this.y+10);
                                    this.glitchX2=random(this.x-10,this.x+10);
                                    this.glitchY2=random(this.y-10,this.y+10);
                                    this.glitchInterval=round(random(10,15));
                                }
                                this.glitchX1=lerp(this.glitchX1,this.x,0.05);
                                this.glitchY1=lerp(this.glitchY1,this.y,0.05);
                                this.glitchX2=lerp(this.glitchX2,this.x,0.05);
                                this.glitchY2=lerp(this.glitchY2,this.y,0.05);
                                
                                break;
                        }
                    break;
                }
            break;
            case 2:
                switch(this.type2){
                    case 1:
                        if(this.on){
                            this.FirstX=lerp(this.FirstX,this.x-25,0.05);
                            this.FirstY=lerp(this.FirstY,this.y+25,0.05);
                            this.FirstAlpha-=5;
                            if(this.FirstAlpha<50){
                                this.FirstAlpha=50;
                            }
                        }
                    break;
                }
            break;
        }
    };
    this.show=function(){
        switch(this.type1){
            case 1:
                switch(this.type2){
                    case 1:
                        switch(this.type3){
                            case 1:
                                // strokeWeight(2);
                                // stroke(255);
                                // noFill();
                                // rect(this.x,this.y,this.Sz,this.Sz);
                                // fill(255);
                                // noStroke();
                                // rect(this.x+10,this.y+10,15,15);
                                // rect(this.x+25,this.y+25,15,15);
                                // noFill();
                                // strokeWeight(2);
                                // stroke(255);
                                // rect(this.x+10,this.y+10,30,30);
                                strokeWeight(5);
                                stroke(255);
                                noFill();
                                rect(this.x,this.y,this.Sz,this.Sz);
                                stroke(255,255,255,this.FirstAlpha);
                                rect(this.FirstX,this.FirstY,this.Sz,this.Sz);
                            break;
                            case 2:
                                switch(this.type4){
                                    case 1:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                    case 2:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        line(this.x+this.Sz,this.y+this.Sz, this.x,this.y+this.Sz);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                        line(this.FirstX+this.Sz,this.FirstY+this.Sz, this.FirstX,this.FirstY+this.Sz);
                                    break;
                                    case 3:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x+this.Sz,this.y+this.Sz, this.x,this.y+this.Sz);
                                        line(this.x,this.y+this.Sz, this.x, this.y);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX+this.Sz,this.FirstY+this.Sz, this.FirstX,this.FirstY+this.Sz);
                                        line(this.FirstX,this.FirstY+this.Sz, this.FirstX, this.FirstY);
                                    break;
                                    case 4:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x,this.y+this.Sz,this.x,this.y);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX,this.FirstY);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                    break;
                                }
                            break;
                            case 3:
                                switch(this.type4){
                                    case 1:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        line(this.x,this.y,this.x,this.y+this.Sz);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                        line(this.FirstX,this.FirstY,this.FirstX,this.FirstY+this.Sz);
                                    break;
                                    case 2:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        line(this.x+this.Sz,this.y+this.Sz,this.x,this.y+this.Sz);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                        line(this.FirstX+this.Sz,this.FirstY+this.Sz,this.FirstX,this.FirstY+this.Sz);
                                    break;
                                    case 3:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        line(this.x+this.Sz,this.y+this.Sz,this.x,this.y+this.Sz);
                                        line(this.x,this.y+this.Sz,this.x,this.y);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                        line(this.FirstX+this.Sz,this.FirstY+this.Sz,this.FirstX,this.FirstY+this.Sz);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX,this.FirstY);
                                    break;
                                    case 4:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x+this.Sz,this.y,this.x,this.y);
                                        line(this.x,this.y,this.x,this.y+this.Sz);
                                        line(this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX,this.FirstY);
                                        line(this.FirstX,this.FirstY,this.FirstX,this.FirstY+this.Sz);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                }
                            break;
                            case 4:
                                switch(this.type4){
                                    case 1:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                    break;
                                    case 2:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                    case 3:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                    case 4:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x,this.y+this.Sz,this.x,this.y);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX,this.FirstY);
                                    break;
                                }
                            break;
                            case 5:
                                switch(this.type4){
                                    case 1:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        line(this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                    case 2:
                                        strokeWeight(5);
                                        stroke(255);
                                        line(this.x,this.y,this.x,this.y+this.Sz);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        stroke(255,255,255,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX,this.FirstY+this.Sz);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                }
                            break;
                        }
                    break;
                    case 2:
                        switch(this.type3){
                            case 1:
                                strokeWeight(5);
                                stroke(102,204,136);
                                line(this.x,this.y,this.x+this.Sz,this.y);
                                fill(102,204,136);
                                noStroke();
                                rect(this.x,this.y+10,this.Sz,this.Sz-10);
                            break;
                            case 2:
                                strokeWeight(5);
                                stroke(102,204,136);
                                line(this.x,this.y,this.x+this.Sz,this.y);
                                fill(102,204,136);
                                noStroke();
                                rect(this.x,this.y+10,this.Sz,this.Sz-10);
                            break;
                            case 3:
                                noStroke();
                                fill(102,204,136);
                                rect(this.x,this.y,this.Sz,this.Sz);
                            break;
                        }
                    break;
                    case 3:
                        switch(this.type3){
                            case 1:
                                fill(0);
                                noStroke();
                                rect(this.x,this.y,this.Sz,this.Sz);
                                // fill(0,0,0,100);
                                // noStroke();
                                // rect(this.x+5,this.y+5,this.Sz,this.Sz);
                            break;
                            case 2:
                                noStroke();
                                fill(255,0,0,100);
                                rect(this.glitchX1,this.glitchY1,this.Sz,this.Sz);
                                fill(0,255,255,100);
                                rect(this.glitchX2,this.glitchY2,this.Sz,this.Sz);
                                fill(255);
                                rect(this.x,this.y,this.Sz,this.Sz);
                            break;
                            case 3:
                                fill(255);
                                noStroke();
                                rect(this.x,this.y,this.Sz,this.Sz);
                            break;
                            case 4:
                                fill(63,19,41);
                                noStroke();
                                rect(this.x,this.y,this.Sz,this.Sz);
                            break;
                            case 5:
                                noStroke();
                                fill(1,51,33);
                                rect(this.x,this.y,this.Sz,this.Sz);
                            break;
                        }
                    break;
                    case 4:
                        switch(this.type3){
                            case 1:
                                switch(this.type4){
                                    case 1:
                                        fill(1,51,33);
                                        noStroke();
                                        triangle(this.x,this.y,this.x+this.Sz/2+10,this.y,this.x,this.y+this.Sz/2+10);
                                        triangle(this.x+this.Sz/2-10,this.y,this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz/2+10);
                                        triangle(this.x,this.y+this.Sz/2-10,this.x,this.y+this.Sz,this.x+this.Sz/2+10,this.y+this.Sz);
                                        triangle(this.x+this.Sz/2-10,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz/2-10);
                                        strokeWeight(5);
                                        stroke(1,51,33);
                                        line(this.x+5,this.y+this.Sz+10,this.x+this.Sz-5,this.y+this.Sz+10);
                                    break;
                                    case 2:
                                        fill(1,51,33);
                                        noStroke();
                                        triangle(this.x,this.y,this.x+this.Sz/2+10,this.y,this.x,this.y+this.Sz/2+10);
                                        triangle(this.x+this.Sz/2-10,this.y,this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz/2+10);
                                        triangle(this.x,this.y+this.Sz/2-10,this.x,this.y+this.Sz,this.x+this.Sz/2+10,this.y+this.Sz);
                                        triangle(this.x+this.Sz/2-10,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz/2-10);
                                    break;
                                }
                            break;
                            case 2:
                                switch(this.type4){
                                    case 1:
                                        fill(1,51,33);
                                        noStroke();
                                        beginShape();
                                        vertex(this.x,this.y);
                                        vertex(this.x+this.Sz,this.y);
                                        vertex(this.x+this.Sz,this.y+this.Sz);
                                        vertex(this.x,this.y+this.Sz);
                                        vertex(this.x,this.y+this.Sz-10);
                                        vertex(this.x+this.Sz/2,this.y+this.Sz-10);
                                        vertex(this.x+this.Sz-10,this.y+this.Sz/2);
                                        vertex(this.x+this.Sz/2,this.y+10);
                                        vertex(this.x,this.y+10);
                                        endShape(CLOSE);
                                        strokeWeight(5);
                                        stroke(1,51,33);
                                        line(this.x,this.y+this.Sz+10,this.x+this.Sz-5,this.y+this.Sz+10);
                                    break;
                                    case 2:
                                        fill(1,51,33);
                                        noStroke();
                                        beginShape();
                                        vertex(this.x+this.Sz,this.y);
                                        vertex(this.x,this.y);
                                        vertex(this.x,this.y+this.Sz);
                                        vertex(this.x+this.Sz,this.y+this.Sz);
                                        vertex(this.x+this.Sz,this.y+this.Sz-10);
                                        vertex(this.x+this.Sz/2,this.y+this.Sz-10);
                                        vertex(this.x+10,this.y+this.Sz/2)
                                        vertex(this.x+this.Sz/2,this.y+10);
                                        vertex(this.x+this.Sz,this.y+10);
                                        endShape(CLOSE);
                                        strokeWeight(5);
                                        stroke(1,51,33);
                                        line(this.x+5,this.y+this.Sz+10,this.x+this.Sz,this.y+this.Sz+10);
                                    break;
                                }
                            break;
                            case 3:
                                fill(1,51,33);
                                noStroke();
                                rect(this.x,this.y,this.Sz,10);
                                rect(this.x,this.y+this.Sz-10,this.Sz,10);
                                strokeWeight(5);
                                stroke(1,51,33);
                                line(this.x,this.y+this.Sz+10,this.x+this.Sz,this.y+this.Sz+10);
                            break;
                        }
                    break;
                    case 5:
                        switch(this.type3){
                            case 1:
                                noStroke();
                                fill(BG[0]*1.5,BG[1]*1.5,BG[2]*1.5);
                                rect(this.x,this.y,this.Sz,this.Sz);
                                fill(BG[0]*1.2,BG[1]*1.2,BG[2]*1.2);
                                beginShape();
                                vertex(this.x+this.Sz,this.y);
                                vertex(this.x+this.Sz+20,this.y-20);
                                vertex(this.x+this.Sz+20,this.y+this.Sz-20);
                                vertex(this.x+this.Sz,this.y+this.Sz);
                                endShape();
                                fill(BG[0]*1.7,BG[1]*1.7,BG[2]*1.7);
                                beginShape();
                                vertex(this.x,this.y);
                                vertex(this.x+20,this.y-20);
                                vertex(this.x+20+this.Sz,this.y-20);
                                vertex(this.x+this.Sz,this.y);
                                endShape();
                            break;
                            case 2:
                                noStroke();
                                fill(BG[0]*1.5,BG[1]*1.5,BG[2]*1.5);
                                rect(this.x,this.y,this.Sz,this.Sz);
                                fill(BG[0]*1.2,BG[1]*1.2,BG[2]*1.2);
                                beginShape();
                                vertex(this.x+this.Sz,this.y);
                                vertex(this.x+this.Sz+20,this.y-20);
                                vertex(this.x+this.Sz+20,this.y+this.Sz-20);
                                vertex(this.x+this.Sz,this.y+this.Sz);
                                endShape();
                            break;
                        }
                    break;
                }
            break;
            case 2:
                switch(this.type2){
                    case 1:
                        switch(this.type3){
                            case 1:
                                // strokeWeight(2);
                                // stroke(255);
                                // noFill();
                                // rect(this.x,this.y,this.Sz,this.Sz);
                                // fill(255);
                                // noStroke();
                                // rect(this.x+10,this.y+10,15,15);
                                // rect(this.x+25,this.y+25,15,15);
                                // noFill();
                                // strokeWeight(2);
                                // stroke(255);
                                // rect(this.x+10,this.y+10,30,30);
                                strokeWeight(5);
                                stroke(240,84,84);
                                noFill();
                                rect(this.x,this.y,this.Sz,this.Sz);
                                stroke(240,84,84,this.FirstAlpha);
                                rect(this.FirstX,this.FirstY,this.Sz,this.Sz);
                            break;
                            case 2:
                                switch(this.type4){
                                    case 1:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                    case 2:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        line(this.x+this.Sz,this.y+this.Sz, this.x,this.y+this.Sz);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                        line(this.FirstX+this.Sz,this.FirstY+this.Sz, this.FirstX,this.FirstY+this.Sz);
                                    break;
                                    case 3:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x+this.Sz,this.y+this.Sz, this.x,this.y+this.Sz);
                                        line(this.x,this.y+this.Sz, this.x, this.y);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX+this.Sz,this.FirstY+this.Sz, this.FirstX,this.FirstY+this.Sz);
                                        line(this.FirstX,this.FirstY+this.Sz, this.FirstX, this.FirstY);
                                    break;
                                    case 4:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x,this.y+this.Sz,this.x,this.y);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX,this.FirstY);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                    break;
                                }
                            break;
                            case 3:
                                switch(this.type4){
                                    case 1:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        line(this.x,this.y,this.x,this.y+this.Sz);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                        line(this.FirstX,this.FirstY,this.FirstX,this.FirstY+this.Sz);
                                    break;
                                    case 2:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        line(this.x+this.Sz,this.y+this.Sz,this.x,this.y+this.Sz);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                        line(this.FirstX+this.Sz,this.FirstY+this.Sz,this.FirstX,this.FirstY+this.Sz);
                                    break;
                                    case 3:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        line(this.x+this.Sz,this.y+this.Sz,this.x,this.y+this.Sz);
                                        line(this.x,this.y+this.Sz,this.x,this.y);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                        line(this.FirstX+this.Sz,this.FirstY+this.Sz,this.FirstX,this.FirstY+this.Sz);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX,this.FirstY);
                                    break;
                                    case 4:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x+this.Sz,this.y,this.x,this.y);
                                        line(this.x,this.y,this.x,this.y+this.Sz);
                                        line(this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX,this.FirstY);
                                        line(this.FirstX,this.FirstY,this.FirstX,this.FirstY+this.Sz);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                }
                            break;
                            case 4:
                                switch(this.type4){
                                    case 1:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                    break;
                                    case 2:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                    case 3:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                    case 4:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x,this.y+this.Sz,this.x,this.y);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX,this.FirstY);
                                    break;
                                }
                            break;
                            case 5:
                                switch(this.type4){
                                    case 1:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        line(this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX+this.Sz,this.FirstY);
                                        line(this.FirstX,this.FirstY+this.Sz,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                    case 2:
                                        strokeWeight(5);
                                        stroke(240,84,84);
                                        line(this.x,this.y,this.x,this.y+this.Sz);
                                        line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                        stroke(240,84,84,this.FirstAlpha);
                                        line(this.FirstX,this.FirstY,this.FirstX,this.FirstY+this.Sz);
                                        line(this.FirstX+this.Sz,this.FirstY,this.FirstX+this.Sz,this.FirstY+this.Sz);
                                    break;
                                }
                            break;
                        }
                    break;
                    case 2:
                        switch(this.type3){
                            case 1:
                                strokeWeight(5);
                                stroke(255,100,100);
                                line(this.x,this.y,this.x+this.Sz,this.y);
                                fill(255,100,100);
                                noStroke();
                                triangle(this.x,this.y+10,this.x+this.Sz,this.y+10,this.x+this.Sz/2,this.y+this.Sz/2);
                            break;
                            case 2:
                                strokeWeight(5);
                                stroke(255,100,100);
                                line(this.x,this.y,this.x+this.Sz,this.y);
                                fill(255,100,100);
                                noStroke();
                                rect(this.x,this.y+10,this.Sz,this.Sz-10);
                            break;
                            case 3:
                                noStroke();
                                fill(255,100,100);
                                rect(this.x,this.y,this.Sz,this.Sz);
                            break;
                        }
                    break;
                    case 3:
                        fill(255,0,0);
                        rect(this.x,this.y,this.Sz,this.Sz);
                    break;
                }
            break;
            case 3:
                switch(this.type2){
                    case 1:
                        fill(255);
                        stroke(255);
                        strokeWeight(3);
                        line(this.x,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz/2);
                        triangle(this.x+this.Sz/2,this.y+10,this.x+this.Sz,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz-10);
                    break;
                    case 2:
                        fill(102,234,106);
                        stroke(102,234,106);
                        strokeWeight(3);
                        line(this.x,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz/2);
                        triangle(this.x+this.Sz/2,this.y+10,this.x+this.Sz,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz-10);
                    break;
                    case 3:
                        fill(0);
                        stroke(0);
                        strokeWeight(3);
                        line(this.x,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz/2);
                        triangle(this.x+this.Sz/2,this.y+10,this.x+this.Sz,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz-10);
                    break;
                }
            break;
            case 4:
                switch(this.type2){
                    case 1:
                        fill(255);
                        stroke(255);
                        strokeWeight(5);
                        triangle(this.x+this.Sz/2,this.y+5,this.x,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz-5);
                    break;
                    case 2:
                        fill(102,204,136);
                        stroke(102,204,136);
                        strokeWeight(5);
                        triangle(this.x+this.Sz/2,this.y+5,this.x,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz-5);
                    break;
                    case 3:
                        switch(this.type3){
                            case 1:
                            break;
                            case 2:
                            break;
                            case 3:
                            break;
                            case 4:
                            break;
                            case 5:
                            break;
                        }
                        fill(0);
                        stroke(0);
                        strokeWeight(5);
                        triangle(this.x+this.Sz/2,this.y+5,this.x,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz-5);
                    break;
                    case 4:
                        fill(255);
                        stroke(255);
                        strokeWeight(5);
                        triangle(this.x+this.Sz/2,this.y+5,this.x,this.y+this.Sz/2,this.x+this.Sz/2,this.y+this.Sz-5);
                    break;
                }
            break;
            case 5:
                switch(this.type2){
                    case 1:
                        fill(255);
                        stroke(255);
                        strokeWeight(5);
                        triangle(this.x,this.y+5,this.x+this.Sz/2,this.y+this.Sz/2,this.x,this.y+this.Sz-5);
                    break;
                    case 2:
                        fill(102,204,136);
                        stroke(102,204,136);
                        strokeWeight(5);
                        triangle(this.x,this.y+5,this.x+this.Sz/2,this.y+this.Sz/2,this.x,this.y+this.Sz-5);
                    break;
                    case 3:
                        fill(0);
                        stroke(0);
                        strokeWeight(5);
                        triangle(this.x,this.y+5,this.x+this.Sz/2,this.y+this.Sz/2,this.x,this.y+this.Sz-5);
                    break;
                    case 4:
                        fill(255);
                        stroke(255);
                        strokeWeight(5);
                        triangle(this.x,this.y+5,this.x+this.Sz/2,this.y+this.Sz/2,this.x,this.y+this.Sz-5);
                    break;
                }
            break;
            case 6:
                switch(this.type2){
                    case 1:
                        if(this.active){
                            noFill();
                            stroke(255);
                            strokeWeight(5);
                            rect(this.x,this.y,this.Sz,this.Sz);
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                        if(!this.active){
                            noFill();
                            stroke(255,255,255,100);
                            strokeWeight(5);
                            rect(this.x,this.y,this.Sz,this.Sz);
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                    break;
                    case 2:
                        if(this.active){
                            strokeWeight(5);
                            stroke(102,204,136);
                            line(this.x,this.y,this.x+this.Sz,this.y);
                            fill(102,204,136);
                            noStroke();
                            rect(this.x,this.y+10,this.Sz,this.Sz-10);
                            stroke(0,0,0)
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                        if(!this.active){
                            strokeWeight(5);
                            stroke(102,204,136,100);
                            line(this.x,this.y,this.x+this.Sz,this.y);
                            fill(102,204,136,100);
                            noStroke();
                            rect(this.x,this.y+10,this.Sz,this.Sz-10);
                            stroke(0,0,0,100);
                            strokeWeight(5);
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                    break;
                    case 3:
                        if(this.active){
                            fill(0);
                            noStroke();
                            rect(this.x,this.y,this.Sz,this.Sz);
                            strokeWeight(5);
                            stroke(255);
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                        if(!this.active){
                            fill(0,0,0,100);
                            noStroke();
                            rect(this.x,this.y,this.Sz,this.Sz);
                            strokeWeight(5);
                            stroke(255,255,255,100);
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                    break;
                }
            break;
            case 7:
                switch(this.type2){
                    case 1:
                        if(!this.active){
                            noFill();
                            stroke(255);
                            strokeWeight(5);
                            rect(this.x,this.y,this.Sz,this.Sz);
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                        if(this.active){
                            noFill();
                            stroke(255,255,255,100);
                            strokeWeight(5);
                            rect(this.x,this.y,this.Sz,this.Sz);
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                    break;
                    case 2:
                        if(!this.active){
                            strokeWeight(5);
                            stroke(102,204,136);
                            line(this.x,this.y,this.x+this.Sz,this.y);
                            fill(102,204,136);
                            noStroke();
                            rect(this.x,this.y+10,this.Sz,this.Sz-10);
                            stroke(0,0,0)
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                        if(this.active){
                            strokeWeight(5);
                            stroke(102,204,136,100);
                            line(this.x,this.y,this.x+this.Sz,this.y);
                            fill(102,204,136,100);
                            noStroke();
                            rect(this.x,this.y+10,this.Sz,this.Sz-10);
                            stroke(0,0,0,100);
                            strokeWeight(5);
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                    break;
                    case 3:
                        if(!this.active){
                            fill(0);
                            noStroke();
                            rect(this.x,this.y,this.Sz,this.Sz);
                            strokeWeight(5);
                            stroke(255);
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                        if(this.active){
                            fill(0,0,0,100);
                            noStroke();
                            rect(this.x,this.y,this.Sz,this.Sz);
                            strokeWeight(5);
                            stroke(255,255,255,100);
                            line(this.x+5,this.y+this.Sz/2,this.x+this.Sz/2,this.y+5);
                            line(this.x+this.Sz/2,this.y+5,this.x+this.Sz-5,this.y+this.Sz/2);
                        }
                    break;
                }
            break;
            case 8:
                switch(this.type2){
                    case 1:
                        noStroke();
                        fill(255);
                        triangle(this.x+this.Sz/2,this.y,this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                    break;
                    case 2:
                        noStroke();
                        fill(102,204,136);
                        triangle(this.x+this.Sz/2,this.y,this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz)
                    break;
                    case 3:
                        switch(this.type3){
                            case 1:
                                noStroke();
                                fill(0);
                                triangle(this.x+this.Sz/2,this.y,this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                            break;
                            case 2:
                                noStroke();
                                fill(255);
                                triangle(this.x+this.Sz/2,this.y,this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                            break;
                            case 3:
                                noStroke();
                                fill(255);
                                triangle(this.x+this.Sz/2,this.y,this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                            break;
                            case 4:
                                noStroke();
                                fill(63,19,41);
                                triangle(this.x+this.Sz/2,this.y,this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                            break;
                            case 5:
                                noStroke();
                                fill(1,51,33);
                                triangle(this.x+this.Sz/2,this.y,this.x,this.y+this.Sz,this.x+this.Sz,this.y+this.Sz);
                            break;
                        }
                    break;
                }
            break;
        }
    };
}
