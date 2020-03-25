//creating variables for r,g and b
var r = 0;
var g = 50;
var b=255;


function setup(){
//creating a canvas
  createCanvas(1200,400);
}


function draw(){
  //giving combination of colors based on the mouse movement in the xAxis
  r = map(mouseX, 0, 1200, 0, 255);
   g = map(mouseX, 10, 900, 50, 300);
   b =map(mouseX,20,700,255,0);
   //assigning them to the background
   background(r,g,b);
   //giving a color to the ellipse
  fill(255);
  //creating the ellipse
  ellipse(mouseX, 100,50,50);

}