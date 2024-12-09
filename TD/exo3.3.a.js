let img;

let l = 0;
let c = 0;


function preload() {
 img = loadImage("assets/pebbles.png");
}


function setup() {
 createCanvas(img.width, img.height);
 img.loadPixels();
 
 for (var y = 0; y < img.height; y++) {
  for (var x = 0; x < img.width; x++) {
        sepia(img, x, y);
}}
 img.updatePixels();
 image(img, 0, 0);
}

function light(image, x, y){
let index = (x + y * image.width) * 4;

img.pixels[index] =  image.pixels[index] * l;
img.pixels[index + 1] = image.pixels[index + 1] * l;
img.pixels[index + 2] = image.pixels[index + 2] * l;
}

function contrast(image, x, y){
let index = (x + y * image.width) * 4;
img.pixels[index] =  image.pixels[index] + c * (image.pixels[index] - 128);
img.pixels[index + 1] = image.pixels[index + 1] + c * (image.pixels[index + 1] - 128);
img.pixels[index + 2] = image.pixels[index + 2] + c * (image.pixels[index + 2] - 128);
}

function gray(image, x, y){
let index = (x + y * image.width) * 4;
let r = image.pixels[index];
let g = image.pixels[index + 1];
let b = image.pixels[index + 2];
let gray = 0.299*r + 0.587*g + 0.114*b
image.pixels[index] = gray;
image.pixels[index + 1] = gray;
image.pixels[index + 2] = gray;
}

function sepia(image, x, y){
    let index = (x + y * image.width) * 4;
    let r = image.pixels[index];
    let g = image.pixels[index + 1];
    let b = image.pixels[index + 2];
    image.pixels[index] =  r*0.393 + g*0.769 + b*0.189;
    image.pixels[index + 1] =  r*0.349 + g*0.686 + b*0.168;
    image.pixels[index + 2] = r*0.272 + g*0.534 + b*0.131;
}