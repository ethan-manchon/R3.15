// Variables globales (les points de contrôle)
let P0, P1, P2, P3;
function setup() {
   createCanvas(windowWidth, windowHeight);
   // On peut créer des points/vecteurs directement
   // avec la fonction createVector
   P0 = createVector(100, 200);
   P1 = createVector(300, 800);
   P2 = createVector(500, 400);
   P3 = createVector(700, 600);
   
   background(200);
   textSize(15);
}
// fonction qui dessine les points de contrôle P0, P1, P2, P3
function drawControlPoints() {
   stroke(255, 0, 0);
   fill(255, 0, 0);
   circle(P0.x, P0.y, 15);
   circle(P1.x, P1.y, 15);
   circle(P2.x, P2.y, 15);
   circle(P3.x, P3.y, 15);
   text("P0", P0.x, P0.y - 20);
   text("P1", P1.x, P1.y - 20);
   text("P2", P2.x, P2.y - 20);
   text("P3", P3.x, P3.y - 20);
}

function mouseDragged() {
   if (dist(mouseX, mouseY, P0.x, P0.y) < 30) {
      P0.set(mouseX, mouseY);
   }
   if (dist(mouseX, mouseY, P1.x, P1.y) < 30) {
      P1.set(mouseX, mouseY);
   }
   if (dist(mouseX, mouseY, P2.x, P2.y) < 30) {
      P2.set(mouseX, mouseY);
   }
   if (dist(mouseX, mouseY, P3.x, P3.y) < 30) {
      P3.set(mouseX, mouseY);
   }
}

function draw() {

   mouseDragged();

   strokeWeight(1);
   background(255);
   drawControlPoints();
   noFill();
   strokeWeight(3);
   stroke(50, 24, 2);
   beginShape();
   curveVertex(P0.x, P0.y);
   curveVertex(P0.x, P0.y);
   curveVertex(P1.x, P1.y);
   curveVertex(P2.x, P2.y);
   curveVertex(P3.x, P3.y);
   curveVertex(P3.x, P3.y);
   endShape();


}
