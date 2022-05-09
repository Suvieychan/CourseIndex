/*var width = 1000;
var height = 1000;*/

function setup (){
    createCanvas(1000, 1000);
    background (100);
    angleMode(DEGREES);
}

function draw(){
    
    translate(500, 500);
    /*rotate(90);
    noFill();
    stroke(0);
    strokeWeight(3);
    rect(0, 0, 50, 200);*/

    var i = 0;
    var p = 0;

    while (i < 100){
        rotate(i);
        noFill();
        stroke(0);
        strokeWeight(3);
        rect(0, 0, 50, 200);
        i++ //i++ means i=i+1, i-- means i=i-1
    }

    if(p == 0){
        translate(0, 0);
        fill(255, 0, 0);
        ellipse(0, 0, 100, 100);
    }

    function mousePressed(){
        saveCanvas("Day3", "png")
    }
}