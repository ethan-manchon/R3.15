

// Que fait cette fonction ?
// La fonction writeColor permet d'écrire une couleur dans une image à une position donnée.
function writeColor(image, x, y, red, green, blue) {
    let index = (x + y * image.width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = 255;
 }
 
 
 function setup() {
    let img = createImage(100, 100);
    // Que fait cette fonction ?
    // La fonction loadPixels permet de charger les pixels de l'image dans un tableau.
    img.loadPixels();
    createCanvas(100, 100);
 
    // Pays bas
    // for (var y = 0; y < img.height; y++) {
    //     for (var x = 0; x < img.width; x++) {
    //         if (y < img.height / 3) {
    //             writeColor(img, x, y, 0, 0, 255);
    //         }
    //         else if (y < 2 * img.height / 3) {
    //             writeColor(img, x, y, 255, 255, 255);
    //         }
    //         else {
    //             writeColor(img, x, y, 255, 0, 0);
    //         }
    //     }

    // France
    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            if (x < img.width / 3) {
                writeColor(img, x, y, 0, 0, 255); 
            }
            else if (x < 2 * img.width / 3) {
                writeColor(img, x, y, 255, 255, 255); 
            }
            else {
                writeColor(img, x, y, 255, 0, 0); 
            }
        }
    }
    // Que fait cette fonction ?
    // La fonction updatePixels permet de mettre à jour les pixels de l'image avec les valeurs du tableau.
    img.updatePixels();
    // Déclanche le rendu de l'image dans le canvas.
    image(img, 0, 0);
 }
 