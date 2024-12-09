function fond(image, x, y) {
    let index = (x + y * image.width) * 4;
    let r = image.pixels[index];
    let g = image.pixels[index + 1];
    let b = image.pixels[index + 2];
    let a = image.pixels[index + 3];

    let color = createVector(r, g, b);

    if (p5.Vector.dist(Cref, color) < 50) {
        a = 0;
    }   
    
    image.pixels[index + 3] = a;
}

let img;
let pebbles;
let Cref;

function preload() {
    img = loadImage("assets/jcvd.png");
    pebbles = loadImage("assets/pebbles.png");
}

function setup() {
    Cref = createVector(74, 160, 59);
    createCanvas(img.width, img.height);
    img.loadPixels();
    
    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            fond(img, x, y, Cref);
        }
    }
    img.updatePixels();
    
    image(pebbles, 0, 0);
    image(img, 0, 0);
}
