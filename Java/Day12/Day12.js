function setup() {
    createCanvas(720, 400);
    background(0);
  }
  
  function draw() {
    // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
    let val = randomGaussian();
  
    let sd = 60; // Define a standard deviation
    let mean = width / 2; // Define a mean value (middle of the screen along the x-axis)
    let x = val * sd + mean; // Scale the gaussian random number by standard deviation and mean
  
    noStroke();
    fill(255, 10);
    text("G", x, height / 2); // Draw an ellipse at our "normal" random location
    textSize(32);
 
}

function mousePressed(){
  saveCanvas("Day12", "png")
}