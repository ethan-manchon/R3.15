function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  }
  // Dessine un podium dans le repère courant
  function drawPodium() {
  fill(255);
  beginShape();
  vertex(0, 200);
  vertex(0, 100);
  vertex(150, 100);
  vertex(150, 0);
  vertex(300, 0);
  vertex(300, 50);
  vertex(450, 50);
  vertex(450, 200);
  endShape(CLOSE);
  textSize(50);
  stroke(1);
  fill(100);
  text('3', 70, 150);
  text('1', 220, 50);
  text('2', 370, 100);
  }
  // Dessine un alien dans le repère courant
  // Largeur totale: 60 pixels / Hauteur totale: 120 pixels
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

  translate(0, height/-2);
  rotate(PI/4); // Question 2
  translate(width / 2 - 225, height / 2 - 100);
  drawPodium();
  push();
  fill(256, 0, 0);
  translate(50, -20);
  drawAlien()
  pop();
  push();
  fill(0, 256, 0);
  translate(200, -120);
  drawAlien()
  pop();
  push();
  fill(0, 0, 256);
  translate(350, -70);
  drawAlien()
  pop();
  }