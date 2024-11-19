let heightMax = 120;
let vSpace = 16;
let hSpace = 25;

let lines = [];

function setup() {
   createCanvas(windowWidth, windowHeight);
   for (let j = 0; j < height; j += vSpace) {
      let line = generateLines();
      lines.push(line);
   }
}

let update = 0;

function draw() {
   background(28, 25, 12);
   stroke(169, 251, 215);
   strokeWeight(2);
   fill(28, 25, 12);

   let indexLine = 0;
   for (let j = update + 10 * vSpace; j < height - 10 * vSpace; j += vSpace) {
      let line = lines[indexLine++];
      let indexR = 0;
      beginShape();
      for (let i = hSpace; i < width - hSpace; i += hSpace) {
         let r = line[indexR++];
         curveVertex(i, j - r);
      }
      endShape();
   }
   update += 1;

   if (update >= vSpace) {
      update = 0;
      lines.pop();
      lines.unshift(generateLines());
   }
}
function generateLines() {
   let oneLine = [];
   for (let i = hSpace; i < width - hSpace; i += hSpace) {
      let r = 0;
      if ((i > width / 3) && (i < 2 * width / 3)) {
         if (random(1) < 0.1) {
            r = random(3, heightMax);
         } else {
            r = random(3, heightMax / 4);
         }
      }
      oneLine.push(r);
   }
   return oneLine;
}