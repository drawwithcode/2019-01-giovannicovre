function preload(){
  // put preload code here
}

function setup(){
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  frameRate(30);
}

function draw(){
  // put drawing code here
  translate(width/2,height/2);

  if(frameCount<180){
    stroke("black");
    line(width/4,0,(cos(frameCount*2)*width/4),(sin(frameCount*2)*width/4));
  }

  else if(frameCount==180){background(0,0,0);}

  else if(frameCount<720){
    stroke(lerpColor(color(220,50,100),color(50,100,200),(frameCount-180)/450));
    line((width/4),0,(cos(frameCount*4)*width/4),(sin(frameCount*4)*width/4));

    stroke(lerpColor(color(50,100,200),color(220,50,100),(frameCount-180)/450));
    line((-width/4),0,(cos(180-frameCount*4)*width/4),(sin(frameCount*4)*width/4));
  }

  else if(frameCount==720){background(0,0,0);}

  //DEATH STAR
  else if(frameCount<2160){
    scale(0.6);

    //BIG CIRCLE
    strokeWeight(1);
    stroke("white");
    line((cos(frameCount/4)*width/4),(sin(frameCount/4)*width/4),(cos(180-frameCount/4)*width/4),(sin(frameCount/4)*width/4));
    line(0,0,(cos(180-frameCount/4)*width/4),(sin(frameCount/4)*width/4));

    //RECT
    strokeWeight(0);
    fill("black");
    rect(-width/3.8,-width/100,width/1.9,width/50);
  }
  else if(frameCount<2880){
    scale(0.6);

    //SMALL CIRCLE
    strokeWeight(1);
    stroke("black");
    translate(width/10,-width/9);
    line(0,0,(cos(frameCount/2)*width/15),(sin(frameCount/2)*width/15));
  }

  //REPEAT
  else if(frameCount==2970){
    frameCount=179;
  }
}
