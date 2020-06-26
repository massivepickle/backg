
var r = 0;
var g = 0;
var b=0;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(1200,400);
  frameRate(144);
}


function draw(){
  r = map(mouseX,0,1200,0,256);
  g = map(mouseX,100,1100,0,256);
  b = map(mouseY,0,400,0,256);
  background(r,g,b);
  fill(255-r,255-g,255-b);
  ellipse(mouseX,mouseY,69,69);
  fill(255-r,255-g,255-b);
  text("R: "+r,10,18);
  text("G: "+g,10,36);
  text("B: "+b,10,52);
  //g = map(mouseX,0,width,10,1190);
  //b = map(mouseY,0,height,50,350);
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the Y axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}