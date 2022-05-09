function setup(){
    createCanvas(1000, 1000);
    background(142, 137, 150);

    var i = 0;
    var rand = random(1000);
    var rand2 = random(50, 1000);
    
    /*while(i < 100){
       fill(random(255));
        ellipse(50 * i, 50, 250, 250);
        ellipse(random(1000), random(1000), 250, 250);
        i = i + 1;
    }*/
    
    /*fill(191, 181,0);
    noStroke();
    rect(100, 100, 100, 500);
    
    fill(0);
    noStroke();
    ellipse(250, 200, 300, 300);
    // ellipse (x, y, w, h)

    fill(142, 137, 150);
    stroke(0);
    ellipse(250, 200, 200, 200);*/

}

function draw(){

    noFill();
    stroke(0);
    ellipse(mouseX, mouseY, random(100, 250), random(100, 250));
}

function mousePressed(){
    saveCanvas("Day1", "png")
}