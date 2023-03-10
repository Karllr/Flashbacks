function backgrounds(x,y,type){
    this.x=x;
    this.y=y;
    this.type=type;
    this.firstspeed=-30;
    this.heights1=[];
    this.anticipat1=[];
    this.anticipat2=[];
    this.heights2=[];
    for(var i=0;i<100;i++){
        this.heights1.push(random(0,1000));
        this.heights2.push(random(0,1000));
        this.anticipat1.push(random(0,1000));
        this.anticipat2.push(random(0,1000));
    }
    this.posX3=[];
    this.posY3=[];
    this.pos3R=[];
    this.pos3S=[];
    for(var i=0;i<50;i++){
        this.posX3.push(random(0,width*100));
        this.posY3.push(random(0,height*10));
        this.pos3R.push(random(50,200));
        this.pos3S.push(random(0.5,1));
    }
    this.pos4=[random(-height*8,height*8),random(-height*8,height*8),random(-height*8,height*8)];
    this.w4=0;

    this.rects=[height*10.9,height*10,height*9,height*8];
    this.lerps=[height*10.9,height*10.9,height*10.9,height*10.9];
    this.update=function(){
        switch(this.type){
            case 1:
                this.y=lerp(this.y,this.firstspeed,0.01);
                if(dist(this.y,0,-30,0)<1){
                    this.firstspeed=30;
                }if(dist(this.y,0,30,0)<1){
                    this.firstspeed=-30;
                }
            break;
            case 2:
                for(var i=0;i<100;i++){
                    this.heights1[i]=lerp(this.heights1[i],this.anticipat1[i],0.05);
                    this.heights2[i]=lerp(this.heights2[i],this.anticipat2[i],0.05);
                    if(frameCount%45===0){
                        this.anticipat1[i]=random(0,1000);
                        this.anticipat2[i]=random(0,1000);
                    }
                }
            break;
            case 3:
                for(var i=0;i<50;i++){
                    this.posX3[i]-=this.pos3S[i];
                } 
                if(this.posX3[i]<-this.pos3R/2){
                    this.posX3=width*100;
                }
            break;
            case 5:
                for(var i=0;i<this.pos4.length;i++){
                    this.pos4[i]=lerp(this.pos4[i],0,0.05);
                    if(frameCount%180===0){
                        this.pos4[i]=random(-height*8,height*8);
                    }
                }
            break;
            case 6:
                this.rects[0]=lerp(this.rects[0],this.lerps[0],0.05);
                this.rects[1]=lerp(this.rects[1],this.lerps[1],0.05);
                this.rects[2]=lerp(this.rects[2],this.lerps[2],0.05);
                this.rects[3]=lerp(this.rects[3],this.lerps[3],0.05);
                for(var i=0;i<this.rects.length;i++){
                    if(height-this.rects[i]<10){
                        
                        this.lerps[i]=0;
                    }
                    if(height-this.rects[i]>height-10){
                        //console.log('ouch')
                        this.lerps[i]=height;
                    }
                }
            break;
            case 7:
                this.w4=lerp(this.w4,width,0.05);
            break;
        }
    };
    this.show=function(){
    switch(this.type){
        case 1:
            fill(0);
            noStroke();
            rect(this.x,this.y,width,height);
            push();
            scale((height/500));
            translate((width/2)/(height/500),(height/4)/(height/500));
            // {fill(255,255,255,200);
            // ellipse(this.x+width/2,this.y+height/4,10,10);
            // stroke(255,255,255,200);
            // strokeWeight(2);
            // line(this.x+width/2,this.y+height/4,this.x+width/2,this.y+height/4+20);
            // noFill();
            // strokeWeight(4);
            // arc(this.x+width/2,this.y+height/4+35,30,30,220,320);
            // strokeWeight(2);
            // line(this.x+width/2,this.y+height/4+20,this.x+width/2,this.y+height/4+40);
            // line(this.x+width/2-20,this.y+height/4+50,this.x+width/2,this.y+height/4+40);
            // line(this.x+width/2+20,this.y+height/4+50,this.x+width/2,this.y+height/4+40);
            // line(this.x+width/2,this.y+height/4+70,this.x+width/2-20,this.y+height/4+80);
            // line(this.x+width/2,this.y+height/4+70,this.x+width/2+20,this.y+height/4+80);
            // line(this.x+width/2,this.y+height/4+73,this.x+width/2-20,this.y+height/4+83);
            // line(this.x+width/2,this.y+height/4+73,this.x+width/2+20,this.y+height/4+83);
            
            // line(this.x+width/2,this.y+height/4+76,this.x+width/2-20,this.y+height/4+86);
            // line(this.x+width/2,this.y+height/4+76,this.x+width/2+20,this.y+height/4+86);
            
            // line(this.x+width/2,this.y+height/4+79,this.x+width/2-20,this.y+height/4+89);
            // line(this.x+width/2,this.y+height/4+79,this.x+width/2+20,this.y+height/4+89);
            
            // line(this.x+width/2,this.y+height/4+82,this.x+width/2-20,this.y+height/4+86);
            // line(this.x+width/2,this.y+height/4+82,this.x+width/2+20,this.y+height/4+86);
            // fill(255,255,255,200);
            // beginShape();
            // vertex(this.x+width/2,this.y+height/4+90);
            // vertex(this.x+width/2+10,this.y+height/4+95);
            // vertex(this.x+width/2+7,this.y+height/4+215);
            // vertex(this.x+width/2,this.y+height/4+225);
            // vertex(this.x+width/2-7,this.y+height/4+215);
            // vertex(this.x+width/2-10,this.y+height/4+95);
            // endShape(CLOSE);
            // beginShape();
            // vertex(this.x+width/2-30,this.y+height/4+65);
            // vertex(this.x+width/2+0,this.y+height/4+50);
            // vertex(this.x+width/2+30,this.y+height/4+65);
            // vertex(this.x+width/2+20,this.y+height/4+75);
            // vertex(this.x+width/2+0,this.y+height/4+65);
            // vertex(this.x+width/2-20,this.y+height/4+75);
            // endShape(CLOSE);
            // filter(BLUR,2);
            // }
            {fill(255,255,255,200);
            ellipse(this.x,this.y,10,10);
            stroke(255,255,255,200);
            strokeWeight(2);
            line(this.x,this.y,this.x,this.y+20);
            noFill();
            strokeWeight(4);
            arc(this.x,this.y+35,30,30,220*PI/180,320*PI/180);
            strokeWeight(2);
            line(this.x,this.y+20,this.x,this.y+40);
            line(this.x-20,this.y+50,this.x,this.y+40);
            line(this.x+20,this.y+50,this.x,this.y+40);
            line(this.x,this.y+70,this.x-20,this.y+80);
            line(this.x,this.y+70,this.x+20,this.y+80);
            line(this.x,this.y+73,this.x-20,this.y+83);
            line(this.x,this.y+73,this.x+20,this.y+83);
            
            line(this.x,this.y+76,this.x-20,this.y+86);
            line(this.x,this.y+76,this.x+20,this.y+86);
            
            line(this.x,this.y+79,this.x-20,this.y+89);
            line(this.x,this.y+79,this.x+20,this.y+89);
            
            line(this.x,this.y+82,this.x-20,this.y+86);
            line(this.x,this.y+82,this.x+20,this.y+86);
            fill(255,255,255,200);
            beginShape();
            vertex(this.x,this.y+90);
            vertex(this.x+10,this.y+95);
            vertex(this.x+7,this.y+215);
            vertex(this.x,this.y+225);
            vertex(this.x-7,this.y+215);
            vertex(this.x-10,this.y+95);
            endShape(CLOSE);
            beginShape();
            vertex(this.x-30,this.y+65);
            vertex(this.x+0,this.y+50);
            vertex(this.x+30,this.y+65);
            vertex(this.x+20,this.y+75);
            vertex(this.x+0,this.y+65);
            vertex(this.x-20,this.y+75);
            endShape(CLOSE);
            /*filter(BLUR,-10);*/}
            for(var i=255;i>0;i--){
                stroke(0,0,0,i);
                strokeWeight(1);
                line(this.x-30,this.y+i,this.x+30,this.y+i);
            }
            pop();
        break;
        case 2:
            push();
            fill(247, 255, 249);
            noStroke();
            rect(this.x,this.y,width,height);
            for(var i=0;i<100;i++){
                fill(212*1.1, 255*1.1, 222*1.1);
                rect(i*50+20,this.heights2[i]-50,50,height);
            }
            for(var i=0;i<100;i++){
                fill(212, 255, 222);
                rect(i*50,this.heights1[i],50,height);
            }
            pop();
        break;
        case 3:
            
            noStroke();
            linearGrad(0,0,width,height,color(218,241,255),color(255,255,255));
            rect(0,0,width,height);
            RadialGrad(width/2-width/5.555,height/2+width/5.555,50,width/2,height/2,width/3,color(186,229,255),color(255,255,255));
            noStroke();
            //fill(0,0,0,50);
            ellipse(width/2-20,height/2+20,width/3,width/3);
            for(var i=0;i<50;i++){
                //noFill();
                strokeWeight(5);
                stroke(179,183,231);
                ellipse(this.posX3[i],this.posY3[i],this.pos3R[i],this.pos3R[i]);
            }
        break;
        case 4:
            noStroke();
            linearGrad(0,0,0,height,color(255,255,255),color(192,247,235));
            rect(0,0,width,height);
            linearGrad(width/2-height/4,height/4,width/2+height/4,3*height/4,color(192,247,235),color(255,255,255))
            beginShape();
            vertex(width/2,height/4);
            vertex(width/2-height/4,height/2);
            vertex(width/2,3*height/4);
            vertex(width/2+height/4,height/2);
            endShape(CLOSE);
        break;
        case 5:
            noStroke();
            linearGrad(0,0,width,0,color(247,192,219),color(255));
            rect(0,0,width,height);
            RadialGrad(width/2-width/5.555,height/2+width/5.555-50,width/3,-height/2,width/2,width/3,color(247,192,219),color(255));
            ellipse(width/2,height/2+this.pos4[0],width/3,width/3);
            ellipse(width/2+height/4,height/4+width/3+this.pos4[1],width/7,width/7);
            ellipse(width/4,height/2+this.pos4[2],width/4,width/4);
        break;
        case 6:
            noStroke();
            fill(255);
            rect(0,0,width,height);
            fill(0);
            for(var i=0;i<4;i++){
                rect(width/4.5+i*250,height-this.rects[i],100,height);
            }
        break;
        case 7:
            noStroke();
            linearGrad(0,0,width,0,color(247,192,219),color(255));
            rect(0,0,width,height);
            linearGrad(0,height/2,width,height/4,color(255),color(247,192,219));
            rect(0,height/2-100,this.w4,height/5.445);
        break;
        case 8:
            noStroke();
            linearGrad(0,0,width,0,color(0),color(0));
            rect(0,0,width,height);
        break;
    }
    };
}