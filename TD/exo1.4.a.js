
// variable globale slider
let slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // slider avec une valeur initiale de 50
  // et qui peut varier entre 0 et 100
  sliderRouge = createSlider(0, 100, 50);
  sliderBlue = createSlider(0, 100, 50);
  sliderGreen = createSlider(0, 100, 50);
// positionnement des sliders côte à côte au centre de l'écran
   sliderRouge.position((windowWidth / 2), windowHeight / 2 - 200);
   sliderBlue.position((windowWidth / 2), windowHeight / 2);
   sliderGreen.position((windowWidth / 2), windowHeight / 2 + 200);
  // taille de texte par défaut (pour l'affichage)
  textSize(20);
}
function draw() {
  // lecture de la valeur du slider et conversion en pourcentage (entre 0 et 1)
  let min = 50;
  let max = 230;
  let pourcentageRed = sliderRouge.value() /  100;
  let red = lerp(min, max, pourcentageRed);
  let pourcentageBlue = sliderBlue.value() /  100;
  let blue = lerp(min, max, pourcentageBlue);
  let pourcentageGreen = sliderGreen.value() /  100;
  let green = lerp(min, max, pourcentageGreen);
  background(red, green, blue);


  text(min, sliderRouge.x, sliderRouge.y)
  text(max, sliderRouge.x + sliderRouge.width, sliderRouge.y);
  text(pourcentageRed, sliderRouge.x + sliderRouge.width / 2, sliderRouge.y + 35);
  
  text(min, sliderBlue.x, sliderBlue.y)
  text(max, sliderBlue.x + sliderBlue.width, sliderBlue.y);
  text(pourcentageBlue, sliderBlue.x + sliderBlue.width / 2, sliderBlue.y + 35);
  
  text(min, sliderGreen.x, sliderGreen.y)
  text(max, sliderGreen.x + sliderGreen.width, sliderGreen.y);
  text(pourcentageGreen, sliderGreen.x + sliderGreen.width / 2, sliderGreen.y + 35);
}
