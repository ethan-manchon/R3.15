/* Rappel : La fonction setup est exécutée
  une seule fois au lancement du programme */
  function setup() {
   createCanvas(windowWidth, windowHeight);
   background(100);
}


/* Rappel : La fonction draw est exécutée en boucle
  tout le temps de l'exécution du programme*/
function draw() {
   background(240);
   stroke(0);
   strokeWeight(1);
   fill(255, 0, 0);
   push();
   translate(86, 90);
   rect(0, 0, 28, 100);
   pop();
   fill(255);
   push();
         translate(72, 230);
         line(0, 0, 13, -40);
   pop();
   push();
         translate(128, 230);
         line(0, 0, -15, -40);
   pop();
   push();
         translate(46, 102);
         line(0, 0, 39, 18);
   pop();
   push();
         translate(46, 102);
         line(0, 0, 67, 18);
   pop();
   push();
   translate(46, 82);
   circle(0, 0, 40);
   pop();
   push();
   translate(100, 70);
   circle(0, 0, 60);
   pop();
   push();
   translate(81, 70);
   ellipse(0, 0, 16, 32);
   pop();
   push();
   translate(119, 70);
   ellipse(0, 0, 16, 32);
   pop();
   fill(100, 100, 255);
   push();
   translate(81, 70);
   ellipse(0, 0, 8, 16);
   pop();
   push();
   translate(119, 70);
   ellipse(0, 0, 8, 16);
   pop();

}
