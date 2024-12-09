function light(image, x, y, p = 1 ){
let index = (x + y * image.width) * 4;

image.pixels[index] =  image.pixels[index] * p;
image.pixels[index + 1] = image.pixels[index + 1] * p;
image.pixels[index + 2] = image.pixels[index + 2] * p;
}

function contrast(image, x, y, p = 0){
let index = (x + y * image.width) * 4;
image.pixels[index] =  image.pixels[index] + p * (image.pixels[index] - 128);
image.pixels[index + 1] = image.pixels[index + 1] + p * (image.pixels[index + 1] - 128);
image.pixels[index + 2] = image.pixels[index + 2] + p * (image.pixels[index + 2] - 128);
}

let img, imgModif;


function preload() {
 img = loadImage("assets/pebbles.png");
}


function setup() {
 imgModif = createImage(img.width, img.height);
 createCanvas(img.width, img.height);
 img.loadPixels();
}


function draw() {
imgModif.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
imgModif.loadPixels();

for (let x = 0; x < img.width; x++) {
for (let y = 0; y < img.height; y++) {
    let modifLum = map(mouseX, 0.5, width, 0.5, 2);
    let modifContrast = map(mouseY, 1, height, -0.5, 1);
    light(imgModif, x, y, modifLum);
    contrast(imgModif, x, y, modifContrast);
}
}

imgModif.updatePixels();
image(imgModif, 0, 0);
}