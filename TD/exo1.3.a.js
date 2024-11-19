// Cette fonction est appelée une fois au début pour initialiser le programme
function setup() {
   // Crée une toile (canvas) qui prend toute la largeur et la hauteur de la fenêtre
   createCanvas(windowWidth, windowHeight);
   // Définit la couleur de fond de la toile à une nuance de gris (100)
   // background(100);
   background(255);
}

// Cette fonction est appelée en boucle et sert à dessiner sur la toile
function draw() {
   Etoile
   stroke(0, 0, 255);
   strokeWeight(2);
   fill(255, 0, 0);
   beginShape();
   vertex(200, 50);
   vertex(217, 90);
   vertex(259, 90);
   vertex(227, 115);
   vertex(240, 155);
   vertex(200, 130);
   vertex(160, 155);
   vertex(173, 115);
   vertex(141, 90);
   vertex(183, 90);
   endShape(CLOSE);
      
}

function mousePressed() {
   console.log("{x: " + mouseX + ", y:" + mouseY + "}");
}
