function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    }
    // Dessine un alien dans le repère courant
    function drawAlien() {
    stroke(0);
    rect(20, 10, 20, 100);
    ellipse(30, 30, 60, 60);
    ellipse(11, 30, 16, 32);
    ellipse(49, 30, 16, 32);
    line(20, 110, 10, 120);
    line(40, 110, 50, 120);
    }
    function draw() {
    background(100);
    translate(windowWidth / 2, windowHeight / 2);
    for (let a = 0; a < 10; a++) {
      push();
      translate(0, 150);
      drawAlien();
      pop();
      rotate(2 * PI / 10);
    
    }
    }