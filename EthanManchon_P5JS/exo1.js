
function shearing(image, x, y){
    let index = (x + y * image.width) * 4;
    let red = image.pixels[index] + 0.25 * image.pixels[index + 2];
    red < 256 ? red : 256;
    image.pixels[index] =  red;
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
    shearing(imgModif, x, y);
  }
  }
  
  imgModif.updatePixels();
  image(imgModif, 0, 0);
  }
  