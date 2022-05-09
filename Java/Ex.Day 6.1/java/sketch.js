function setup() {
    createCanvas(1000, 1000, WEBGL);
    background(100);
    rectMode(CENTER);
    frameRate(60);
}

function draw() {

    orbitControl();
    torus(100, 100);
    
}