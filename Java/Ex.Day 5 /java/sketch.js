var i = 0;
var p = 0;
var bool = false;

function setup() {
    createCanvas(1000, 1000);
    background(100);
    angleMode(DEGREES);
    frameRate(120)
}

function draw() {

    if (i <= 360 && startAnim == true) {
        push();
        translate(300, 300);
        noFill(255);
        stroke(0);
        rect(0, 0, 200, 200);
         
        rotate(i);
        rect(0, 0, 200, 200);
        pop();
        i++;
    }

    if (i >= 360) {
        bool = true;
    }

    if (p <= 700 && bool == true) { 

        push();
        noFill();
        stroke(0);
        rect(0, 0 + p, 200, 200);
        pop();
        p++;
    }
    //mouseCheck();
}

/*function mouseClicked() {
    startAnim = true

}

function keyPressed() {
    if (key == 's') {
    saveCanvas("sketch", "png");
    }
}*/

/*function mouseCheck() {
    if (mouseX <= 500 && mouseY <= 500) {
    background(114, 137, 173);
    }
    if (mouseX >= 500 && mouseY <= 500) {
    background(201, 77, 170);
    }
    if (mouseX <= 500 && mouseY >= 500) {
    background(167, 204, 161);
    }
    if (mouseX >= 500 && mouseY >= 500) {
    background(206, 177, 222);
    }
        
}*/