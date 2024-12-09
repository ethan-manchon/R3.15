let N = 100;   // nombre de bugs
let bugs = []; // tableaux des bugs
let speed = 1; // vitesse des bugs


/* Fonction createOneBug
  Fabrique et retourne un objet "bug" en tout point identique aux   objets Jitter de l'exemple de la documentation de P5.js.
  Note : cette fonction est appelée dans la fonction setup
*/
let createOneBug = function () {


   // déclaration d'un objet bug
   let bug = {
      // PROPRIETES (données caractéristiques de l'objet bug)
      x: random(windowWidth), // abscisse
      y: random(windowHeight), // ordonnée
      diameter: random(10, 30), // diamètre aléatoire entre 10 et 30
     isStatic: false,

      // METHODES (fonctions qui s'appliquent à l'objet bug)
      // méthode move : déplace aléatoirement les coordonnées du bug
      move() {
         // modification aléatoire de l'abscisse en fct de speed
         bug.x += random(-speed, speed);
         // modification aléatoire de l'ordonnée en fct de speed
         bug.y += random(-speed, speed);
      },

      // méthode display : affiche un bug
      display() {
         // représentation graphique du bug par un disque
         circle(bug.x, bug.y, bug.diameter);
      }
   }; // fin de la déclaration d'un objet bug


   return bug; // la fonction renvoie l’objet bug créé
}


function setup() {
   createCanvas(windowWidth, windowHeight);
   let first = createOneBug();
   first.x = windowWidth / 2;
   first.y = windowHeight /2;
   first.isStatic = true;
   bugs.push(first);
   // Créations des objets (les  bugs). 50 par défaut
   for (let i = 0; i < N; i++) {
       // on fabrique un bug
       let bug = createOneBug();
       // ajout de l'objet bug dans le tableau global bugs
       bugs.push(bug);
   }

}


function draw() {
   background(50, 89, 100);
   for (let i = 0; i < bugs.length; i++) {
       let iemeBug = bugs[i];
        if (!iemeBug.isStatic) {
       iemeBug.move(); // modification de la position
               }
               
      
       iemeBug.display(); // affichage
   }

}
