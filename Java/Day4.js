var i = 0;
var p = 0;
var q = 0;
var r = 0;
var l = 0;


function setup() {
    createCanvas(1000, 1000);
    background(142, 137, 150);
    angleMode(DEGREES);
    frameRate(120)
}



function draw() {

    if (i <= 360) {
        push();
        translate(300, 300);
        fill(0);
        stroke(0);
        rect(0, 0, 100, 25);
        
        rotate(i);
        rect(0,0, 100, 25);
        pop();
        i++;
    }

    if (p <= 180){ 

        push();
        translate(328, 300);
        fill(0);
        stroke(0);
        rect(0, 0 + p, 75, 25)
        pop();
        p++;

    }

    if (q <= 180) {
        push();
        translate(303, 495);
        fill(0);
        stroke(0);
        rect(0, 0, 100, 25);
         
        rotate(q);
        rect(0,0, 100, 25);
        pop();
        q++;
    }

   if (r <= 720) {
        push();
        translate(303, 495);
        fill(142, 137, 150);
        stroke(142, 137, 150);
        rect(0, 0, 17, 17);
         
        rotate(r);
        rect(0,0, 17, 17);
        pop();
        r++;
    }
    
    if (l <= 720) {
        push();
        translate(300, 300);
        fill(142, 137, 150);
        stroke(142, 137, 150);
        rect(0, 0, 25, 25);
        
        rotate(l);
        rect(0,0, 25, 25);
        pop();
        l++;
    }

    function mousePressed(){
        saveCanvas("Day4", "png")
    }

}