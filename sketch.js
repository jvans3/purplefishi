let easing = 0.02;
let x, y;
let targetX;
let targetY;
let v, k;
let gif;
let gifc;
let gifs;
let gifm;


function setup() {
  createCanvas(800, 500);

  v = width /3;
  k = height/2;

  x = 0;
  targetX = 0;
  y = 0;
  targetY = 0;
}

function preload() {
  gif = loadImage("seaweed.gif");
  
  gifc = loadImage('crab.gif');
  
  
  gifm = loadImage('man.gif');
}

function draw() {
  background(71, 71, 191);

  //mountains
  fill(105, 124, 252);
  noStroke();
  beginShape();
  vertex(0, 500); //start
  vertex(0, 70);
  vertex(100, 120);
  vertex(150, 100);
  vertex(300, 170);
  vertex(330, 200);
  vertex(370, 180);
  vertex(470, 70);
  vertex(540, 100);
  vertex(620, 120);
  vertex(650, 100);
  vertex(800, 170);
  vertex(800, 500); //end
  endShape(CLOSE);
  
   image(gifm, 550, 0, 260, 290);
  
   fill(134, 169, 249);
  noStroke();
  beginShape();
  vertex(0, 500); //start
  vertex(0, 220);
  vertex(100, 220);
  vertex(150, 220);
  vertex(300, 270);
  vertex(330, 300);
  vertex(370, 310);
  vertex(470, 300);
  vertex(540, 295);
  vertex(620, 270);
  vertex(650, 280);
  vertex(800, 260);
  vertex(800, 500); //end
  endShape(CLOSE);

  //bubbles

  v = v + random(1, -1);
  k = k - 2.2;

  if (k < 0) {
    k = height;
  }
  if (v < 0) {
    v = width;
  }

  push();
    strokeWeight(2.7);
  
  fill(195, 249, 249, 25);
  stroke(213, 226, 255);
  circle(v, k, 80);
  noFill();
  arc(v + 1, k - 1, 67, 60, PI, PI + QUARTER_PI);
  
  fill(195, 249, 249, 25);
  stroke(213, 226, 255);
  circle(v + 55, k + 45, 25);
  noFill();
  arc(v + 62, k + 47, 27, 22, PI, PI + QUARTER_PI);
 
  fill(195, 249, 249, 25);
  stroke(213, 226, 255);
  circle(v + 444, k, 50);
  noFill();
  arc(v + 453, k - 1, 54, 37, PI, PI + QUARTER_PI);
  pop();

  //mountains

  fill(97, 143, 253);
  noStroke();
  beginShape();
  vertex(0, 500); //start
  vertex(0, 200);
  vertex(90, 240);
  vertex(220, 330);
  vertex(370, 370);
  vertex(500, 330);
  vertex(600, 330);
  vertex(700, 300);
  vertex(800, 320);
  vertex(800, 500); //end
  endShape(CLOSE);

  //sand
  
  fill(255, 253, 166);
  rect(0, 430, 800, 70);

  tint(163, 255, 117, 160);
  image(gif, 30, 220, 190, 230);
  
  noTint();
  image(gifc, 10, 400, 128, 90);
  

  
 

  //fish
  push();
  noStroke();
  translate(x, y);
  
  fill(51, 255, 255);
triangle(-40, -40, 3, -15, 45, -50);
  
  fill(51, 255, 255);
  triangle(40, -2, 90, -25, 65, 30);
  
  fill(227, 146, 255);
  ellipse(0, 0, 100, 70);
  
  fill(51, 255, 255);
  triangle(25, -17, 0, -2, 13, 20);
  
  

  fill(0, 0, 40);
  circle(-30, 0, 15);
  pop();

  targetX = mouseX;
  targetY = mouseY;

  x = x + (targetX - x) * easing;
  y = y + (targetY - y) * easing;

  tint(179, 255, 119);
  image(gif, 122, 287, 150, 190);
  
  
  


  

}