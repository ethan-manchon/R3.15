function setup() {
   createCanvas(windowWidth, windowHeight);
}


let angle = 0;

let height = 200;
let width = 20;
let grow = true

function draw() {
   background(100);
   if (height >= 400) {
      grow = false;
   } else if (height <= 200) {
      grow = true;
   } 

   if (grow) {
      height += 5;
      width += 0.5;
   } else {
      height -= 5;
      width -= 0.5;
   }

   red = map(mouseX, 0, width, 0, 255);
   blue = map(mouseY, 0, height, 0, 255);
   green = map(mouseX, 0, 0, 255, 0);

   fill(red, green, blue);

   translate(mouseX, mouseY);
   rotate(angle);
   ellipse(0, 0, height, width);
   angle += 0.1;
}

