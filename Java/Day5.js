var i = 0;
var p = 0;
var q = 0;
var r = 0;
var bool = false;

function setup() {
    createCanvas(1000, 1000);
    background(142, 137, 150);
    angleMode(DEGREES);
    frameRate(240)
}


function draw() {

    if (i <= 665) {
        push();
        translate(300, 300);
        
        rotate(i);
        fill(100);
        stroke(100);
        rect(0, 0, 200, 200);
        fill(142, 137, 150);
        stroke(142, 137, 150);
        strokeWeight(2)
        rect(0, 0, 150, 150);
        pop();
        i++;
    }

    if (i >= 665) {
        bool = true;
    }

    if (q <= 135 && bool == true) { 

        push();
        translate(250, 200);
        fill(142, 137, 150);
        noStroke();
        rect(0, 0, 350, 125);
        pop();
        q++;
    }

    if (p >= 135) {
        bool = true;
    }
    
    if (p <= 135 && bool == true) { 

        push();
        translate(432, 300);
        fill(100);
        stroke(100);
        rect(0, 0 + p, 150, 150);
        pop();
        p++;
    }

    function mousePressed(){
        saveCanvas("Day5", "png")
    }



    
}
