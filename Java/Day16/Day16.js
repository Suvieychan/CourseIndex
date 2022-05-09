function setup() {
    createCanvas(720, 400);
    noStroke();
    rectMode(CENTER);
  }
  
  function draw() {
    background(230);
    fill(244, 122, 158);
  
    text("G", mouseX, height / 2);
    textSize(mouseY / 2 + 10);
    fill(237, 34, 93);
    let inverseX = width - mouseX;
    let inverseY = height - mouseY;
    text("G", inverseX, height / 2);
    textSize(inverseY / 2 + 10);
    
  
}
 