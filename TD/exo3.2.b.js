let img;


function preload() {
 img = loadImage("assets/pebbles.png");
}


function setup() {
 createCanvas(img.width, img.height);
 img.loadPixels();
 
 for (var y = 0; y < img.height; y++) {
  for (var x = 0; x < img.width; x++) {
      if (x < img.width / 3) {
          keepRed(img, x, y); 
      }
      else if (x < 2 * img.width / 3) {
          keepGreen(img, x, y); 
      }
      else {
          keepBlue(img, x, y); 
      }
  }
}
 img.updatePixels();
 image(img, 0, 0);
}

function keepRed(image, x, y){
let index = (x + y * image.width) * 4;
image.pixels[index + 1] = 0;
image.pixels[index + 2] = 0;
}
function keepGreen(image, x, y){
let index = (x + y * image.width) * 4;
image.pixels[index] = 0;
image.pixels[index + 1] = image.pixels[index + 1];
image.pixels[index + 2] = 0;
}
function keepBlue(image, x, y){
let index = (x + y * image.width) * 4;
image.pixels[index] = 0;
image.pixels[index + 1] = 0;
image.pixels[index + 2] = image.pixels[index + 2];
}

// function GBR(image, x, y){
// let index = (x + y * image.width) * 4;
// let r = image.pixels[index];
// let g = image.pixels[index + 1];
// let b = image.pixels[index + 2];
// image.pixels[index] = g;
// image.pixels[index + 1] = b;
// image.pixels[index + 2] = r;
// }