// Tableau pour stocker les hauteurs des rectangles
let snow = [];

let minSize = 10;
let maxSize = 20;


function setup() {
   createCanvas(windowWidth, windowHeight);

   for (let i = 0; i < random(300, 500); i += 1)
   snow.push({ x: random(windowWidth), y: random(windowHeight) , size: random(minSize, maxSize), speed: random(1, 4) });

   // Remplir le tableau avec des hauteurs aléatoires

}

function draw() {
   background(100);
   snow.push({ x: random(windowWidth), y: -20 , size: random(minSize, maxSize), speed: random(1, 4) });

   

   // Dessiner les rectangles en utilisant les hauteurs du tableau
   for (let i = 0; i < snow.length; i++) {
      circle(snow[i].x, snow[i].y, snow[i].size);
      
      // Modifier les hauteurs petit à petit
      snow[i].y += snow[i].speed;
   }
}
