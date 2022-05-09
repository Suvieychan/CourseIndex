//var letterToDraw;
var p = 0;
var r;
var g;
var b;

function setup() {
    createCanvas(1000, 1000);
    background(100);
    rectMode(CENTER);
    frameRate(60);
    //letterToDraw = new Letter(200, 200);
    //letterToDraw.display();
}

function draw() {
        
    //background(100);
    translate(500, 500);
    push();
    showLetter(0, 0, 50);
    rotate(45 + p);
    showLetter(0, 0, 50);
    pop();
    p++;
}

function showLetter(x, y, w) {
    if (p % 360 == 0) {
        r = random(255);
        g = random(255);
        b = random(255);
    }
    stroke(255);
    fill(r, g, b);
    rect(x , y , 150, 50);
    rect(x - 50, y , w, 200);
    rect(x + 50, y , w, 200);
    
}

/*function draw() {

    letterToDraw = new Letter(200, 200);
    letterToDraw.display();
    letterToDraw.move();
}
    //background(100);

    /*push();
    letterToDraw = new Letter(i * 10, i * 10);
    letterToDraw.display();
    pop();
    p++;

    for ( var i = 0; i < 100; i++) {
        letterToDraw = new Letter(i * 10, i * 10);
        letterToDraw.display();

    }
}*/

/*class Letter {
    constructor(x, y) {
        this.letterX = x;
        this.letterY = y;
        this.letterW = 100;
        this.letterH = 300;
        this.dir = -1;
    }
    display() {
        fill(0);
        stroke(255);
        rect(this.letterX, this.letterY, this.letterW, 50);
        rect(this.letterX - 50, this.letterY, 50, this.letterH);
        rect(this.letterX + 50, this.letterY, 50, this.letterH);
    }
    move() {

        this.letterX = this.letterX + this.dir;
    }
}*/