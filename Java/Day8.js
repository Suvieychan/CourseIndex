var i = 0;
var p = 0;
var q = 0;
var r = 0;
var b = 0;
var a = 0;
var bool = false;

function setup() {
    createCanvas(1000, 1000);
    background(142, 137, 150);
    angleMode(DEGREES);
    frameRate(240);
}

function draw() {
    
       if (p <= 360){ 
    push();
    translate(200, 200);

    fill(0)
    rotate(p);
    arc(0, 0, 180, 180, 0, PI + QUARTER_PI);
    //line(0, 0, 50, 50);
   // strokeWeight(20)
    pop();
    p++;
    } 

    function mousePressed(){
        saveCanvas("Day8", "png")
    }
    
    /*if (i <= 360){
    push();
    translate(200, 200);

    rotate(i);
    textSize(60);
    text(".  g G", 50, 50);
    pop();
    i++;
    }


    if (i >= 360) {
        bool = true;
    }
    
    if (q <= 135 && bool == true) { 

        push();
        translate(200, 200);

        rotate(270);
        fill(142, 137, 150);
        stroke(142, 137, 150);
        rect(20, 0 + q, 25, 125);
        pop();
        q++;
    }

    if (q >= 135) {
        bool = true;
    }
    
    if (r <= 135 && bool == true) { 

        push();
        translate(200, 200);

        rotate(r);
        fill(142, 137, 150);
        stroke(142, 137, 150);
        arc(0, 0, 100, 100, 360, 180, QUARTER_PI, PIE);

        pop();
        r++;
    }
    
    if (r >= 135) {
        bool = true;
    }
    
    if (b <= 135 && bool == true) { 

        push();
        translate(200, 200);

        rotate(270);
        fill(0);
        stroke(0);
        rect(0, 0 + b, 25, 65);
        pop();
        b++;
    }

    if (b >= 135) {
        bool = true;
    }
    
    if (a <= 135 && bool == true) { 

        push();
        translate(200, 200);

        fill(0);
        stroke(0);
        rect(125, 0 + a, 75, 70);
        pop();
        a++;
    }*/
 

}
