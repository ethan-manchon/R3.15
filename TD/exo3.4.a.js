function seuillage(image, x, y, seuil) {
    let index = (x + y * image.width) * 4;
    let r = image.pixels[index];
    let g = image.pixels[index + 1];
    let b = image.pixels[index + 2];
    let gray = 0.299 * r + 0.587 * g + 0.114 * b;
    if (gray < seuil) {
        image.pixels[index] = 0;
        image.pixels[index + 1] = 0;
        image.pixels[index + 2] = 0;
    } else {
        image.pixels[index] = 255;
        image.pixels[index + 1] = 255;
        image.pixels[index + 2] = 255;
    }
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
            let seuil = map(mouseX, 128, width, 0, 255);
            seuillage(imgModif, x, y, seuil);
        }
    }
    imgModif.updatePixels();
    image(imgModif, 0, 0);
}