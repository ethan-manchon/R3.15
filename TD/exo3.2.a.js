let img;


function preload() {
 img = loadImage("assets/pebbles.png");
}


function setup() {
 createCanvas(img.width, img.height);
 img.loadPixels();
 
 for (let y = 0; y < img.height; y++) {
   for (let x = 0; x < img.width; x++) {
     keepRed(img, x, y);
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