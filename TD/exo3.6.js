function miroir (image, x, y){
let p = getPixel(image, x, y);

setPixel(image, image.height - y - 1, x, p);
setPixel(image, y, image.width - x -1, p);
}
// function miroir (image, x, y){
// let p = getPixel(image, x, y);
// setPixel(image, image.width - x - 1, y, p);
// setPixel(image, x, image.height - y - 1, p);
// }
// function miroir (image, x, y){
//     let pHaut = getPixel(image, x, y);
//     let pBas = getPixel(image, x, image.height - y - 1);
//     setPixel(image, x, y, pBas);
//     setPixel(image, x, image.height - y - 1, pHaut);
// }
let img;

function preload() {
 img = loadImage("assets/bonjour.png");
}


function setup() {
 createCanvas(img.width, img.height);
 img.loadPixels();
 
 for (let y = 0; y < img.height; y++) {
   for (let x = 0; x < img.width; x++) {
     miroir(img, x, y);
   }
 }
 img.updatePixels();
 image(img, 0, 0);
}

