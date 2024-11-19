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
   background(230);
   stroke(0); noFill();
   beginShape();
   let precision = 50 + map(mouseX, 0, width, 0, width);
   let y = map(mouseY, 0, height, 0, height);
   for (let x = 0; x <= windowWidth + precision; x += precision) {
       y = height - y;
       vertex(x, y);
   }
   endShape(); 

}

function mousePressed() {
   console.log("{x: " + mouseX + ", y:" + mouseY + "}");
}
