let points = []
// Nombre de points à générer
let N = 200;
// Fonction createParticule
// Retourne une particule
// une particule a un mouvement circulaire autour d'une position fixe (cx, cy)
function createParticule() {
let part = {
// (cx, cy) est le centre de rotation de la particule
cx: random(0, windowWidth),
cy: random(0, windowHeight),
// r est le rayon (en pixel) de la rotation
r: random(0, 260),
// angle est l'angle de la rotation
angle: 0,
// vitesse de la rotation (négatif ça tourne en sens inverse)
speed: random(-3, 3),
// x est l'abscisse de la particule dans le repère de l’image
get x() {
return part.cx + part.r * cos(radians(part.angle));
},
// y est l'abscisse de la particule dans le repère de l’image
get y() {
return part.cy + part.r * -sin(radians(part.angle));
}
}
return part;
}
function setup() {
createCanvas(windowWidth, windowHeight);
background(100);
// Création et stockage dans points de N particules
for (let i = 0; i < N; i++) {
let p = createParticule();
points.push(p);
}
}
function draw() {
background(100);
fill(255);
// Parcours du tableau de point
for (let p of points) {
// dessin d'une particule par un cercle de rayon 10
// et de centre égal aux coordonnées de la particule
circle(p.x, p.y, 10);
p.angle += p.speed;

// Question 2
// if (dist(mouseX, mouseY, p.x, p.y) < 100){ 
//   line(mouseX, mouseY, p.x, p.y);
// }

    for (let p2 of points) {
      if (dist(p.x, p.y, p2.x, p2.y) < 100){ 
        line(p.x, p.y, p2.x, p2.y);
      }
    }
  }
}