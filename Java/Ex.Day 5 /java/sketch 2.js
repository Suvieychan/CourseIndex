var i = 0;
var myFont;
var pic;

function preload() {
    //myFont  = loadFont("fonts/LEMONMILK");
    pic = loadImage("img/hi.jpeg");
}

function setup() {
    createCanvas(1000, 1000);
    background(100);
    angleMode(DEGREES);
}

function draw() {

    /*for (i = 0; i < 20; i++) {
        var noiseVal = mouseY + random(-20, 20);
        line(i * 10, 0, i * 10, noiseVal);    
        noFill();
        arc(i * 10, i * 10, 700, 400, PI * noiseVal, 25);

    }*/

    push();
    translate(500, 500);
    
    //textFont(myFont);
    textSize(60);
    text("word", 0, 0);

    rotate(i);
    textSize(60);
    text("word", 0, 0);
    pop();
    i++;
    image(pic, 0, 0, 200, 100);




}