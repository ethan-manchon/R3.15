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
// fonction qui dessine les segments [P0P1], [P1P2] et [P2P3]
function drawControlCage() {
   stroke(0, 0, 0)
   line(P0.x, P0.y, P1.x, P1.y);
   line(P1.x, P1.y, P2.x, P2.y);
   line(P2.x, P2.y, P3.x, P3.y);
}
function draw() {
   background(255);
   drawControlCage();
   drawControlPoints();

   stroke(12, 43, 223);
   noFill();

   bezier(P0.x, P0.y, P1.x, P1.y, P2.x, P2.y, P3.x, P3.y);
}
