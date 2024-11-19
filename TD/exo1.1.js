// Cette fonction est appelée une fois au début pour initialiser le programme
function setup() {
   // Crée une toile (canvas) qui prend toute la largeur et la hauteur de la fenêtre
   createCanvas(windowWidth, windowHeight);
   // Définit la couleur de fond de la toile à une nuance de gris (100)
   // background(100);
   background(255, 255, 0);
}

// Cette fonction est appelée en boucle et sert à dessiner sur la toile
function draw() {
   // Le background est rappelé à chaque frame et efface le dessin précédent
   // background(0, 0, 125);
   // Dessine un cercle aux coordonnées de la souris avec un diamètre de 20 pixels
   let w = windowWidth / 2;
   let h = windowHeight / 2;
   circle(w, h, 100);
   // circle(mouseX, mouseY, random(10, 30));

}
