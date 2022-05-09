let rad = 75; // Width of the shape
let xpos, ypos;

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(1000, 1000);
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(220);
  textSize(300);

  text("G", xpos - 75, ypos);
  fill(255, 0, 0);

  text("G", xpos + 75, ypos);
  fill(255, 0, 0);


  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }
  
}

function mousePressed(){
  saveCanvas("Day20", "png")
}
