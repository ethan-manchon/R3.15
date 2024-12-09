
function coloriage(image, x, y){
    let index = (x + y * image.width) * 4;
  
    let lum = 0.299*image.pixels[index] + 0.587*image.pixels[index + 1] + 0.114*image.pixels[index + 2];
    
   if (image.pixels[index + 2] < 26) {
      image.pixels[index] = 0;
      image.pixels[index + 1] = 0;
      image.pixels[index + 2] = 256;
    }
  
    if (image.pixels[index + 1] > 229) {
        image.pixels[index] = 0;
        image.pixels[index + 1] =  256;
        image.pixels[index + 2] = 0;
    }
  
    if (lum > 122 && lum < 132) {
      image.pixels[index] = 256;
      image.pixels[index + 1] = 0;
      image.pixels[index + 2] = 0;
    }
  
  }
    
  let img, imgModif;
    
    
  function preload() {
  img = loadImage("images/london.png");
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
    coloriage(imgModif, x, y);
  }
  }
  
  imgModif.updatePixels();
  image(imgModif, 0, 0);
  }
  