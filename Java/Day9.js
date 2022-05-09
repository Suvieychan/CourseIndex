let diameter;
let angle = 0;

function setup() {
  createCanvas(710, 400);
  diameter = height - 10;
  noStroke();
  fill(255, 204, 0);
}

function draw() {
  background(0);

  let d1 = 10 + (sin(angle) * diameter) / 2 + diameter / 2;
  let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
  let d3 = 10 + (sin(angle + PI) * diameter) / 2 + diameter / 2;

  text("G", 0, height / 2 + 90);
  textSize(d1);
  text("G", width / 2, height / 2 + 90);
  textSize(d2);
  text("G", width, height / 2 + 90);
  textSize(d3);

  angle += 0.02;



    function mousePressed(){
        saveCanvas("Day9", "png")
    } 
}