var letterToDraw;

function setup() {
    createCanvas(1000, 1000);
    background(100);
    rectMode(CENTER);
    letterToDraw = new Letter(200, 200);
    letterToDraw.display();
}

function draw() {

    letterToDraw = new Letter(mouseX, mouseY);
    letterToDraw.display();
}

class Letter {
    constructor(x, y) {
        this.letterX = x;
        this.letterY = y;
        this.letterW = 100;
        this.letterH = 300;
    }
    display() {
        fill(0);
        stroke(255);
        rect(this.letterX, this.letterY, this.letterW, 50);
        rect(this.letterX - 50, this.letterY, 50, this.letterH);
        rect(this.letterX + 50, this.letterY, 50, this.letterH);

    }
}