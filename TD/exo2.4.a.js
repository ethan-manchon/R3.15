// Tableau pour stocker les hauteurs des rectangles
let hauteurs = [];

// Écart entre les rectangles
let ecart = 20;
let defaultSize = 0;

function setup() {
   createCanvas(windowWidth, windowHeight);

   // Remplir le tableau avec des hauteurs aléatoires
   for (let i = 0; i < windowWidth; i += ecart)
      hauteurs.push(random(ecart));
}

function draw() {
   background(100);
   translate(width / 2, 0); 
   rotate(PI / 2);


   // Dessiner les rectangles en utilisant les hauteurs du tableau
   for (let i = 0; i < hauteurs.length; i++) {
      rect(i * ecart, 0, ecart, hauteurs[i]);

      // Modifier les hauteurs aléatoirement
      hauteurs[i] += random(-ecart, ecart);
   }
}
