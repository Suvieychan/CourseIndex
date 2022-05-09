function setup(){
    createCanvas(1000, 1000);
    background(142, 137, 150)

    var i = 0;
    var rand = random(1000);
    var rand2 = random(50, 1000);
    
    fill(0);
    noStroke();
    ellipse(350, 300, 500, 500);
    // ellipse (x, y, w, h)

    fill(142, 137, 150);
    stroke(0);
    ellipse(350, 300, 300, 300);
    
    fill(142, 137, 150);
    noStroke();
    rect(325, 175, 400, 200);  
  
    fill(0);
    noStroke();
    rect(325, 275, 250, 100);
  
    fill(0);
    noStroke();
    rect(500, 275, 90, 270);
}

function mousePressed(){
    saveCanvas("Day2", "png")
}