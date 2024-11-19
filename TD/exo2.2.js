/* Rappel : La fonction setup est exécutée
  une seule fois au lancement du programme */
  function setup() {
   createCanvas(windowWidth, windowHeight);
   background(100);
}


/* Rappel : La fonction draw est exécutée en boucle
  tout le temps de l'exécution du programme*/


  function rectWithLabel(label) {
      rect(0, 0, 100, 50);
      text(label, 50, 25);
   }
   function draw() {
      push();
      translate(5, 5);
      rectWithLabel("R1");
      pop();
      
      push();
      translate(windowWidth - 5, 5);
      rotate(PI / 2);
      rectWithLabel("R2");
      pop();
      
      push();
      translate(windowWidth - 5 , windowHeight - 5);
      rotate(PI / 1);
      rectWithLabel("R3");
      pop();
      
      push();
      translate(5, windowHeight - 5);
      rotate(PI / -2);
      rectWithLabel("R4");
      pop();

      push();
      translate(windowWidth / 2 - 75, windowHeight / 2);
      circle(0, 0, 10);
      pop();
      push();
      translate(windowWidth / 2 - 25, windowHeight / 2);
      scale(1.5);
      circle(0, 0, 10);
      pop();
      push();
      translate(windowWidth / 2 + 25, windowHeight / 2);
      scale(2);
      circle(0, 0, 10);
      pop();
      push();
      translate(windowWidth / 2 + 75, windowHeight / 2);
      scale(4);
      circle(0, 0, 10);
      pop();
   }
   

/*  function draw() {
      push();
      rotate(PI / 3);
      rect(0, 0, 160, 20);
      pop();
      rotate(HALF_PI / 3);     
      rect(0, 0, 160, 20);

} */
