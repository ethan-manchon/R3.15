function getPixel(image, x, y) {
    let index = (x + y * image.width) * 4;
    return [image.pixels[index], image.pixels[index + 1], image.pixels[index + 2], image.pixels[index + 3]];
}

function setPixel(image, x, y, color) {
    let index = (x + y * image.width) * 4;
    image.pixels[index] = color[0];
    image.pixels[index + 1] = color[1];
    image.pixels[index + 2] = color[2];
    image.pixels[index + 3] = color[3];
}
